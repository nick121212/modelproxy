"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const engine_base_1 = require("./engine.base");
const compose_1 = require("../libs/compose");
class DefaultEngine extends engine_base_1.BaseEngine {
    doProxy(instance, executeInfo, ...otherOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const c = new compose_1.Compose();
            const { before, after, error } = executeInfo;
            if (before) {
                c.merge(before);
            }
            c.merge(this);
            if (after) {
                c.merge(after);
            }
            const ctx = yield c.callback()(Object.assign({ executeInfo,
                instance }, otherOptions));
            if (ctx.isError) {
                if (error) {
                    yield error.callback()(ctx).catch(() => void (0));
                }
                throw ctx.err;
            }
            return ctx;
        });
    }
    proxy(instance, executeInfo, ...otherOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.doProxy(instance, executeInfo, ...otherOptions);
        });
    }
}
exports.DefaultEngine = DefaultEngine;
