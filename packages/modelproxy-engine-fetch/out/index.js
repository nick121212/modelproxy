"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const modelproxy_1 = require("modelproxy");
const fetch = require("isomorphic-fetch");
const URLSearchParams = require("url-search-params");
const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
};
class FetchEngine extends modelproxy_1.DefaultEngine {
    /**
     * 初始化
     */
    init() {
        this.use(this.fetch.bind(this));
    }
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let formData = new URLSearchParams(), bodyParams = new URLSearchParams(), { executeInfo = {}, instance = {} } = ctx, body, headers = {}, { timeout = 5000, headers: originHeaders = {}, type = "", fetch: fetchOptions = {} } = executeInfo.settings || {}, fullPath = this.getFullPath(instance, executeInfo);
            if (typeof FormData !== "undefined") {
                formData = new FormData();
            }
            // 根据type来设置不同的header
            switch (type) {
                case "params":
                    headers = Object.assign({}, defaultHeaders, headers);
                    body = bodyParams;
                    break;
                case "formdata":
                    body = formData;
                    break;
                default:
                    headers = Object.assign({}, defaultHeaders, headers);
                    body = JSON.stringify(executeInfo.data || {});
                    break;
            }
            // 合并headers
            headers = Object.assign({}, headers || {}, originHeaders);
            // 处理数据
            for (const key in executeInfo.data) {
                if (executeInfo.data.hasOwnProperty(key)) {
                    const data = executeInfo.data[key];
                    formData.append(key, data);
                    bodyParams.append(key, data);
                }
            }
            // 调用解耦请求
            const fetchFunc = fetch.bind(fetch, fullPath, Object.assign({}, {
                body: ["GET", "OPTIONS", "HEAD"].indexOf(instance.method.toUpperCase()) === -1 ? body : null,
                credentials: "same-origin",
                headers: headers,
                method: instance.method
            }, fetchOptions));
            // 发送请求
            ctx.result = yield Promise.race([
                this.delay(timeout || 5000).then(() => {
                    const err = new Error(`接口请求超时！(${timeout})`);
                    err.name = "timeout";
                    throw err;
                }),
                fetchFunc()
            ]);
            yield next();
        });
    }
}
exports.FetchEngine = FetchEngine;
//# sourceMappingURL=index.js.map