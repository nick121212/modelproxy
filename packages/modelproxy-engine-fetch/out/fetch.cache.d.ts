import { IProxyCtx } from "modelproxy/out/models/proxyctx";
/**
 * 为fetch增加cache的功能
 * 返回新的promise
 * @param fetchPromise {Promise<any>} fetch的promise
 * @param options      {IExecute}     请求参数
 * @param fullPath     {string}       请求路径
 * @returns {Promise<any>}
 */
export declare const fetchCacheDec: (fetchPromise: () => Promise<any>, ctx: IProxyCtx, fullPath: string) => Promise<any>;
