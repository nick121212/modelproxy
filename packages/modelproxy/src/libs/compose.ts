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

    constructor() {
        this.middlewares = [];
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
    public compose(): Function {
        if (!Array.isArray(this.middlewares)) {
            throw new TypeError("Middleware stack must be an array!");
        }
        for (const fn of this.middlewares) {
            if (typeof fn !== "function") {
                throw new TypeError("Middleware must be composed of functions!");
            }
        }

        return (context: T, next: MiddleFunc<T>): Promise<any> => {
            return new Promise((resolve, reject) => {
                let index = -1;
                const dispatch = (i: number) => {
                    return new Promise(async (resolve1) => {
                        let fn: MiddleFunc<T> = this.middlewares[i];

                        if (i <= index) {
                            return reject(new Error("next() called multiple times" + i + "-" + index));
                        }
                        index = i;
                        if (i === this.middlewares.length) {
                            fn = next;
                        }
                        if (!fn) {
                            return resolve1(context);
                        }
                        try {
                            await fn(context, async (key?: string) => {
                                if (key === "abort") {
                                    return resolve(context);
                                }
                                await dispatch(i + 1);
                                resolve1();
                            });
                        } catch (err) {
                            // console.log("compose error" + err);
                            reject(err);
                        }
                    });
                };

                return dispatch(0).then(resolve.bind(context));
            });
        };
    }

    /**
     * 错误的判断
     * @param {Object}  ctx    执行上下文
     * @param {Object}  err    错误数据
     */
    public errorHandle(ctx: T, err: Error) {
        ctx.isError = true;
        ctx.err = err;
        // console.error("compose--", err);
    }

    /**
     * 包装compose函数
     * @param   {MiddleRtnFunc} complete  执行完毕后回调函数
     * @returns {MiddleRtnFunc}
     */
    public callback(complete?: MiddleRtnFunc<T>): (options: any) => Promise<IProxyCtx> {
        const fn = this.compose();

        return (options: any): Promise<any> => {
            let ctx: T = Object.assign(options || {}, {}) as T;
            let promise = fn(ctx, async (content: any, next: MiddleRtnFunc<T>) => {
                await next();
            }).then(() => {
                return ctx;
            }).catch((err: Error) => {
                this.errorHandle(ctx, err);

                return ctx;
            });

            return promise;
        };
    }
}
