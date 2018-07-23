"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelproxy_1 = require("modelproxy");
const promiseFactory = new modelproxy_1.BaseFactory();
/**
 * 为fetch增加cache的功能
 * 返回新的promise
 * @param fetchPromise {Promise<any>} fetch的promise
 * @param options      {IExecute}     请求参数
 * @param fullPath     {string}       请求路径
 * @returns {Promise<any>}
 */
exports.fetchCacheDec = (fetchPromise, ctx, fullPath) => {
    const { executeInfo = {}, instance } = ctx;
    const { settings } = executeInfo;
    let { cache = false } = settings || {}, { method = "" } = instance || {}, proKey = fullPath + method;
    // 只有get才能缓存
    if (method.toString().toUpperCase() !== "GET") {
        cache = false;
    }
    // 如果不缓存直接调用方法
    if (!cache) {
        return fetchPromise();
    }
    // 从缓存中提取文档，如果没有，则添加
    const promiseInCache = promiseFactory.get(proKey);
    if (promiseInCache) {
        return promiseInCache;
    }
    // 添加缓存
    promiseFactory.add(proKey, fetchPromise());
    return promiseFactory.get(proKey);
};
//# sourceMappingURL=fetch.cache.js.map