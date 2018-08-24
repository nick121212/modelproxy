"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_base_1 = require("./engine.base");
const compose_1 = require("../libs/compose");
class DefaultEngine extends engine_base_1.BaseEngine {
    constructor() {
        super();
        this.use(async (ctx, next) => {
            await next("");
        });
    }
    async doProxy(instance, executeInfo, ...otherOptions) {
        const c = new compose_1.Compose();
        const { before, after, error } = executeInfo;
        if (before) {
            c.merge(before);
        }
        c.merge(this);
        if (after) {
            c.merge(after);
        }
        const ctx = await c.callback()(Object.assign({ executeInfo,
            instance }, otherOptions));
        if (ctx.isError) {
            if (error) {
                await error.callback()(ctx).catch(() => { });
            }
            throw ctx.err;
        }
        return ctx;
    }
    async proxy(instance, executeInfo, ...otherOptions) {
        return this.doProxy(instance, executeInfo, ...otherOptions);
    }
}
exports.DefaultEngine = DefaultEngine;
