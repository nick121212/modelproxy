import { IProxyCtx } from "../models/proxyctx";
import { BaseFactory } from "../libs/base.factory";
export declare const promiseFactory: BaseFactory<{
    cacheIn: number;
    promise: Promise<any>;
    expire?: number | undefined;
}>;
export declare const cacheDec: (func: (...args: any[]) => Promise<any>, ctx: IProxyCtx, fullPath: string) => (...args: any[]) => Promise<any>;
