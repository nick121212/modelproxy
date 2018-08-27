import { IProxyCtx } from "../models/proxyctx";
export interface MiddleFunc<T extends IProxyCtx> {
    (ctx: T, next: (symbol?: string) => Promise<void>): void;
}
export interface MiddleRtnFunc<T extends IProxyCtx> {
    (ctx?: T): void;
}
export declare class Compose<T extends IProxyCtx> {
    private middlewares;
    constructor(...wares: MiddleFunc<T>[]);
    use(func: MiddleFunc<T>): void;
    clear(): void;
    compose(): (context: T, next: MiddleFunc<T>) => Promise<any>;
    getMiddlewares(): Array<MiddleFunc<T>>;
    merge(c: Compose<T>, top?: boolean): Compose<T>;
    errorHandle(ctx: T, err: Error): void;
    callback(complete?: MiddleRtnFunc<T>): (options: any) => Promise<IProxyCtx>;
}
