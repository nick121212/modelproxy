"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const modelproxy_1 = require("modelproxy");
const fetch = require("isomorphic-fetch");
const fetch_cache_1 = require("./fetch.cache");
const fetch_decorator_1 = require("./fetch.decorator");
const defaultHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};
class FetchEngine extends modelproxy_1.BaseEngine {
    /**
     * 初始化中间件
     * 处理参数params，data，header等数据
     */
    init() {
        this.use((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let formData = new URLSearchParams(), bodyParams = new URLSearchParams(), { executeInfo = {}, instance = {} } = ctx, body, headers = { "X-Requested-With": "XMLHttpRequest" }, { timeout = 5000, headers: originHeaders = {}, type = "", fetch: fetchOptions = {} } = executeInfo.settings || {}, fullPath = this.getFullPath(instance, executeInfo);
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
            headers = Object.assign({}, headers || {}, originHeaders);
            for (const key in executeInfo.data) {
                if (executeInfo.data.hasOwnProperty(key)) {
                    let data = executeInfo.data[key];
                    formData.append(key, data);
                    bodyParams.append(key, data);
                }
            }
            const fetchFunc = fetch.bind(fetch, fullPath, Object.assign({}, {
                body: ["GET", "OPTIONS", "HEAD"].indexOf(instance.method.toUpperCase()) === -1 ? body : null,
                credentials: "same-origin",
                headers: headers,
                method: instance.method,
            }, fetchOptions));
            // 发送请求
            ctx.result = yield fetch_decorator_1.fetchDec(fetch_cache_1.fetchCacheDec(fetchFunc, ctx, fullPath), timeout);
            yield next();
        }));
    }
    /**
     * 调用接口代理方法
     * @param   {IInterfaceModel} instance      接口的信息
     * @param   {IExecute}        options       调用接口的参数
     * @param   {any[]}           otherOptions  调用接口的参数
     * @returns {Promise<any>}                  返回数据
     */
    proxy(instance, options, ...otherOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = yield this.callback()(Object.assign({
                executeInfo: options,
                instance: instance,
            }, ...otherOptions));
            if (ctx.isError) {
                throw ctx.err;
            }
            return ctx.result;
        });
    }
}
exports.FetchEngine = FetchEngine;
//# sourceMappingURL=fetch.engine.js.map