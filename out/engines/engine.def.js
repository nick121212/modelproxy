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
const engine_base_1 = require("./engine.base");
class DefaultEngine extends engine_base_1.BaseEngine {
    constructor() {
        super();
        this.use((ctx, next) => {
            next();
            return new Promise((resolve) => {
                resolve();
            });
        });
    }
    validate(instance, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    proxy(instance, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let fn = this.callback();
            let res = yield fn({
                executeInfo: options,
                instance: instance
            });
            if (res.isError) {
                throw res.err;
            }
            return instance;
        });
    }
}
exports.DefaultEngine = DefaultEngine;
