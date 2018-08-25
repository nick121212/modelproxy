import { IProxyCtx } from "../models/proxyctx";
import { BaseFactory } from "../libs/base.factory";

export const promiseFactory = new BaseFactory<{ cacheIn: number; promise: Promise<any>; expire?: number }>();

/**
 * 为fetch增加cache的功能
 * 返回新的promise
 * @param fetchPromise {Promise<any>} fetch的promise
 * @param options      {IExecute}     请求参数
 * @param fullPath     {string}       请求路径
 * @returns {Promise<any>}
 */
export const cacheDec = (fetchPromise: () => Promise<any>, ctx: IProxyCtx, fullPath: string) => {
    const { executeInfo = {}, instance } = ctx;
    const { settings } = executeInfo;
    const { cache = false, reload = false, expire = undefined } = settings || {},
        { method = "" } = instance || {},
        proKey = fullPath + method;

    // 只有get才能缓存
    // if (method.toString().toUpperCase() !== "GET") {
    //     cache = false;
    // }

    // 如果不缓存直接调用方法
    if (!cache) {
        return fetchPromise();
    }

    // 删除缓存
    if (!reload) {
        promiseFactory.remove(proKey);
    }

    const dataInCache = promiseFactory.get(proKey);
    let { promise: promiseInCache = null, expire: expireInCache = null, cacheIn = 0 } = dataInCache || {};

    // 处理失效时间
    if (expireInCache && cacheIn) {
        if (cacheIn + expireInCache < Date.now()) {
            promiseFactory.remove(proKey);
            promiseInCache = null;
        }
    }

    // 命中缓存
    if (promiseInCache) {
        return promiseInCache;
    }

    const promise = fetchPromise();

    // 添加缓存
    promiseFactory.add(proKey, { promise, expire, cacheIn: Date.now() });

    return promise;
};
