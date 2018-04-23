import { IProxyCtx } from "../models/proxyctx";
export declare class Compose<T extends IProxyCtx> {
    private middlewares;
    constructor();
    use(func: Function): void;
    clear(): void;
    compose(): Function;
    errorHandle(ctx: T, err: Error): void;
    callback(complete?: Function): Function;
}
