import { IProxyCtx } from "../models/proxy.ctx";
export declare namespace ModelProxy {
    class Compose<T extends IProxyCtx> {
        private middlewares;
        constructor();
        use(func: Function): void;
        clear(): void;
        compose(): Function;
        errorHandle(ctx: T, err: Error): void;
        callback(complete: Function): Function;
    }
}
