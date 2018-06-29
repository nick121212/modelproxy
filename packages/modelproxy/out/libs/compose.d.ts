import { IProxyCtx } from "../models/proxyctx";
export interface MiddleFunc<T extends IProxyCtx> {
    (ctx: T, next: (symbol?: string) => Promise<void>): void;
}
export interface MiddleRtnFunc<T extends IProxyCtx> {
    (ctx?: T): void;
}
export declare class Compose<T extends IProxyCtx> {
    private middlewares;
    constructor();
    use(func: MiddleFunc<T>): void;
    clear(): void;
    compose(): Function;
    errorHandle(ctx: T, err: Error): void;
    callback(complete?: MiddleRtnFunc<T>): (options: any) => Promise<IProxyCtx>;
}
