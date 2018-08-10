"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Compose {
    constructor(...wares) {
        this.middlewares = [...wares];
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
                const dispatch = async (i) => {
                    let fn = this.middlewares[i];
                    if (i <= index) {
                        return reject(new Error("next() called multiple times" + i + "-" + index));
                    }
                    index = i;
                    if (i === this.middlewares.length) {
                        fn = next;
                    }
                    if (!fn) {
                        return context;
                    }
                    try {
                        await fn(context, async (key) => {
                            if (key === "abort") {
                                return resolve(context);
                            }
                            await dispatch(i + 1);
                        });
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                return dispatch(0).then(resolve.bind(context));
            });
        };
    }
    getMiddlewares() {
        return this.middlewares.concat([]);
    }
    merge(c) {
        const middles = c.getMiddlewares();
        middles.forEach((m) => {
            this.use(m);
        });
        return this;
    }
    errorHandle(ctx, err) {
        ctx.isError = true;
        ctx.err = err;
    }
    callback(complete) {
        const fn = this.compose();
        return async (options) => {
            let ctx = Object.assign(options || {}, {});
            try {
                await fn(ctx, async (content, next) => {
                    await next();
                    if (ctx.isError) {
                        throw ctx.err;
                    }
                });
            }
            catch (err) {
                this.errorHandle(ctx, err);
            }
            return ctx;
        };
    }
}
exports.Compose = Compose;
