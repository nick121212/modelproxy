"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pathToRegexp = require("path-to-regexp");
require("url-search-params-polyfill");
const compose_1 = require("../libs/compose");
const errors_1 = require("../libs/errors");
class BaseEngine extends compose_1.Compose {
    constructor() {
        super();
    }
    validate(instance, options) {
        return true;
    }
    proxy(instance, options) {
        return __awaiter(this, void 0, void 0, function* () {
            instance.getPath(options.instance);
            return {};
        });
    }
    getStatePath(instance) {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }
        return "";
    }
    replacePath(instance, { params = [], data = {} }) {
        let tokens = pathToRegexp.parse(instance.path);
        let paths = [];
        tokens.forEach((token) => {
            let { name } = token;
            if (!name) {
                paths.push(token);
            }
            else {
                if (!params[name] && !data[name]) {
                    throw new errors_1.ModelProxyMissingError(`缺少[${name}]字段！`);
                }
                paths.push(`/${params[name] || data[name]}`);
                delete params[name];
            }
        });
        return paths.join("");
    }
    getFullPath(instance, options) {
        let url = `${this.getStatePath(instance)}` + this.replacePath(instance, options);
        let searchParams = new URLSearchParams();
        if (options.params) {
            Object.keys(options.params).forEach((key) => {
                searchParams.append(key, options.params[key]);
            });
            if (searchParams.toString()) {
                url += `?${searchParams.toString()}`;
            }
        }
        return url;
    }
}
exports.BaseEngine = BaseEngine;
