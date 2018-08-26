"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathToRegexp = require("path-to-regexp");
const URLSearchParams = require("url-search-params");
const compose_1 = require("../libs/compose");
const errors_1 = require("../libs/errors");
class BaseEngine extends compose_1.Compose {
    async validate(_instance, _options) {
        return true;
    }
    async delay(interval) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, interval);
        });
    }
    async proxy(instance, options, ...otherOptions) {
        instance.getPath(options.instance);
        return {};
    }
    getStatePath(instance) {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }
        return "";
    }
    replacePath(instance, { params = [], data = {} }) {
        const tokens = pathToRegexp.parse(instance.path), paths = [];
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
        const url = [this.getStatePath(instance), this.replacePath(instance, options)], searchParams = new URLSearchParams();
        if (options.params) {
            Object.keys(options.params).forEach((key) => {
                searchParams.append(key, options.params[key]);
            });
            let qs = searchParams.toString();
            if (qs) {
                url.push(`?${qs}`);
            }
        }
        return url.join("");
    }
}
exports.BaseEngine = BaseEngine;
