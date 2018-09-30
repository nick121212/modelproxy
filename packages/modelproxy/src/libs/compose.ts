import { IProxyCtx } from "../models/proxyctx";
// import * as Bluebird from "bluebird";

export interface MiddleFunc<T extends IProxyCtx> {
    (ctx: T, next: (symbol?: string) => Promise<void>): void;
}

export interface MiddleRtnFunc<T extends IProxyCtx> {
    (ctx?: T): void;
}

/**
 * koa中间件方法
 */
export class Compose<T extends IProxyCtx>  {
    private middlewares: Array<MiddleFunc<T>>;

    constructor(...wares: MiddleFunc<T>[]) {
        this.middlewares = [...wares];
    }

    /**
     * 添加中间件函数
     * @param  { MiddleFunc} func 中间件方法
     * @return {void}
     */
    public use(func: MiddleFunc<T>): void {
        if (typeof func !== "function") {
            throw new TypeError("middleware must be a function！");
        }

        this.middlewares.push(func);
    }

    /**
     * 清除中间件方法
     */
    public clear() {
        this.middlewares.length = 0;
    }

    /**
     * 生成中间件执行函数
     * @return {Function}
     */
    public compose(): (context: T, next: MiddleFunc<T>) => Promise<any> {
        const {middlewares} = this;

        if (!Array.isArray(middlewares)) {
            throw new TypeError("Middleware stack must be an array!");
        }
        for (const fn of middlewares) {
            if (typeof fn !== "function") {
                throw new TypeError("Middleware must be composed of functions!");
            }
        }

        return (context: T, next: MiddleFunc<T>): Promise<any> => {
            return new Promise((resolve, reject) => {
                let index = -1;
                const dispatch = async (i: number) => {
                    let fn: MiddleFunc<T> = middlewares[i];

                    if (i <= index) {
                        return reject(new Error("next() called multiple times" + i + "-" + index));
                    }
                    index = i;
                    if (i === middlewares.length) {
                        fn = next;
                    }
                    if (!fn) {
                        return context;
                    }
                    try {

                        await fn(context, async (key?: string) => {
                            if (key === "abort") {
                                return resolve(context);
                            }
                            await dispatch(i + 1);
                        });
                    } catch (e) {
                        reject(e);
                    }
                };

                return dispatch(0).then(resolve.bind(context));
            });
        };
    }

    /**
     * 获取当前的所有中间件方法
     * @return  {Array<MiddleFunc<T>>}
     */
    public getMiddlewares(): Array<MiddleFunc<T>> {
        return this.middlewares.concat([]);
    }

    /**
     * 两个compose类的中间件合并
     * @param {Compose<T>}  c   被合并的compose
     * @param {boolean}     top 放在头部
     * @return {Compose<T>}
     */
    public merge(c: Compose<T>, top = false): Compose<T> {
        const middles = c.getMiddlewares();
        const topMiddles: Array<MiddleFunc<T>> = [];

        middles.forEach((m: MiddleFunc<T>) => {
            if (top) {
                topMiddles.push(m);
            } else {
                this.use(m);
            }
        });

        this.middlewares = topMiddles.concat(this.middlewares);

        return this;
    }

    /**
     * 错误的判断
     * @param  {Object}  ctx    执行上下文
     * @param  {Object}  err    错误数据
     * @return {void}
     */
    public errorHandle(ctx: T, err: Error) {
        ctx.isError = true;
        ctx.err = err;
    }

    /**
     * 包装compose函数
     * @param   {MiddleRtnFunc} complete  执行完毕后回调函数
     * @return  {MiddleRtnFunc}
     */
    public callback(complete?: MiddleRtnFunc<T>): (options: any) => Promise<IProxyCtx> {
        const fn = this.compose();

        return async (options: any): Promise<any> => {
            let ctx: T = Object.assign(options || {}, {}) as T;

            try {
                await fn(ctx, async (content: T, next: (symbol?: string) => Promise<void>) => {
                    await next();

                    if (ctx.isError) {
                        throw ctx.err;
                    }
                });
            } catch (err) {
                this.errorHandle(ctx, err);
            }

            return ctx;
        };
    }
}
