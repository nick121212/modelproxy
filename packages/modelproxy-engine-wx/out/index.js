"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const modelproxy_1 = require("modelproxy");
// import { fetchCacheDec } from "./fetch.cache";
// import { fetchDec } from "./fetch.decorator";
class FetchEngine extends modelproxy_1.DefaultEngine {
    constructor(fetchFunc) {
        super();
        this.fetchFunc = fetchFunc;
    }
    /**
     * 初始化
     */
    init() {
        this.use(this.fetch);
    }
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { instance, executeInfo = {}, settings = {} } = ctx;
            const { method = "" } = instance || {};
            const { header = {} } = settings;
            const fullPath = this.getFullPath(instance, executeInfo);
            if (!this.fetchFunc) {
                throw new Error("fetch function is null.");
            }
            // 发布request请求
            ctx.result = yield this.fetchFunc({
                data: executeInfo.data,
                header: header || {},
                method: method,
                url: fullPath,
            });
            yield next();
        });
    }
}
exports.FetchEngine = FetchEngine;
//# sourceMappingURL=index.js.map