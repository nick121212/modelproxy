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
const modelproxy_1 = require("modelproxy");
if (!modelproxy_1.globalObj.fetch) {
    modelproxy_1.globalObj.fetch = require("isomorphic-fetch");
}
const { URLSearchParams } = modelproxy_1.globalObj;
const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
};
class FetchEngine extends modelproxy_1.DefaultEngine {
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let formData = new URLSearchParams(), bodyParams = new URLSearchParams(), { executeInfo = {}, instance = {} } = ctx, body, headers = {}, { timeout = 5000, headers: originHeaders = {}, type = "", fetch: fetchOptions = {} } = executeInfo.settings || {}, url = this.getFullPath(instance, executeInfo);
            if (typeof FormData !== "undefined") {
                formData = new FormData();
            }
            // 根据type来设置不同的headers
            switch (type) {
                case "params":
                    headers = Object.assign({}, defaultHeaders, headers);
                    body = bodyParams;
                    break;
                case "formData":
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
            // 发送请求
            ctx.result = yield Promise.race([
                this.delay(timeout || 5000).then(() => {
                    throw new modelproxy_1.MPError(`接口请求超时！(${timeout})`, "9999", ctx);
                }),
                fetch(url, Object.assign({ body: ["GET", "OPTIONS", "HEAD"].indexOf(instance.method.toUpperCase()) === -1 ? body : null, credentials: "same-origin", headers: headers, method: instance.method }, fetchOptions))
            ]);
            yield next();
        });
    }
}
exports.FetchEngine = FetchEngine;
//# sourceMappingURL=index.js.map