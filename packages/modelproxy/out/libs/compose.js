"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
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
                const dispatch = (i) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                        yield fn(context, (key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            if (key === "abort") {
                                return resolve(context);
                            }
                            yield dispatch(i + 1);
                        }));
                    }
                    catch (e) {
                        reject(e);
                    }
                });
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
        return (options) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let ctx = Object.assign(options || {}, {});
            try {
                yield fn(ctx, (content, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    yield next();
                    if (ctx.isError) {
                        throw ctx.err;
                    }
                }));
            }
            catch (err) {
                this.errorHandle(ctx, err);
            }
            return ctx;
        });
    }
}
exports.Compose = Compose;
