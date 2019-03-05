import { IProxyCtx } from "../models/proxyctx";
import { BaseFactory } from "../libs/base.factory";

export const promiseFactory = new BaseFactory<{ cacheIn: number; promise: Promise<any>; expire?: number }>();

/**
 * cache的高阶函数
 * 返回新的promise
 * @param func         {Promise<any>} 需要被高阶的函数
 * @param options      {IExecute}     请求参数
 * @param fullPath     {string}       请求路径
 * @returns {Promise<any>}
 */
export const cacheDec = (func: (...args: any[]) => Promise<any>, ctx: IProxyCtx, fullPath: string) => {
    const { executeInfo = {}, instance } = ctx;
    const { settings } = executeInfo;
    const { cache = false, reload = false, expire = undefined } = settings || {},
        { method = "" } = instance || {},
        proKey = fullPath + method;

    return function(...args: any[]): Promise<any> {
        // 如果不缓存直接调用方法
        if (!cache) {
            return func.apply(null, args);
        }

        // 删除缓存
        if (reload) {
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
            ctx.fromCache = true;

            return promiseInCache;
        }

        // 如果错误的话，清除掉缓存
        const promise = func.apply(null, args).catch((e: Error) => {
            promiseFactory.remove(proKey);

            throw e;
        });

        // 添加缓存
        promiseFactory.add(proKey, { promise, expire, cacheIn: Date.now() });

        return promise;
    };
};
