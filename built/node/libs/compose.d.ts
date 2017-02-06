export declare namespace ModelProxy {
    class Compose {
        private middlewares;
        constructor();
        use(func: Function): void;
        compose(): Function;
        errorHandle(ctx: any, err: Error): void;
        callback(complete: Function): Function;
    }
}
