"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Compose {
    constructor() {
        this.middlewares = [];
    }
    use(func) {
        if (typeof func !== "function") {
            throw new TypeError("middleware must be a function！");
        }
        this.middlewares.push(func);
    }
    clear() {
        this.middlewares.length = 0;
    }
    compose() {
        if (!Array.isArray(this.middlewares)) {
            throw new TypeError("Middleware stack must be an array!");
        }
        for (const fn of this.middlewares) {
            if (typeof fn !== "function") {
                throw new TypeError("Middleware must be composed of functions!");
            }
        }
        return (context, next) => {
            return new Promise((resolve, reject) => {
                let index = -1;
                const dispatch = (i) => {
                    return new Promise(async (resolve1) => {
                        let fn = this.middlewares[i];
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
                            await fn(context, async (key) => {
                                if (key === "abort") {
                                    return resolve(context);
                                }
                                await dispatch(i + 1);
                                resolve1();
                            });
                        }
                        catch (err) {
                            reject(err);
                        }
                    });
                };
                return dispatch(0).then(resolve.bind(context));
            });
        };
    }
    errorHandle(ctx, err) {
        ctx.isError = true;
        ctx.err = err;
    }
    callback(complete) {
        const fn = this.compose();
        return (options) => {
            let ctx = Object.assign(options || {}, {});
            let promise = fn(ctx, async (content, next) => {
                await next();
            }).then(() => {
                return ctx;
            }).catch((err) => {
                this.errorHandle(ctx, err);
                return ctx;
            });
            return promise;
        };
    }
}
exports.Compose = Compose;
