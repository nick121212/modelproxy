"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_base_1 = require("./engine.base");
class DefaultEngine extends engine_base_1.BaseEngine {
    constructor() {
        super();
        this.use(async (ctx, next) => {
            await next("");
        });
    }
    async proxy(instance, options, ...otherOptions) {
        const res = await this.callback()(Object.assign({ executeInfo: options, instance: instance }, otherOptions));
        if (res.isError) {
            throw res.err;
        }
        return instance;
    }
}
exports.DefaultEngine = DefaultEngine;
