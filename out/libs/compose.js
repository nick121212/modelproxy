"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
                    return new Promise((resolve1) => __awaiter(this, void 0, void 0, function* () {
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
                            yield fn(context, () => __awaiter(this, void 0, void 0, function* () {
                                yield dispatch(i + 1);
                                resolve1();
                            }));
                        }
                        catch (err) {
                            reject(err);
                        }
                    }));
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
            let promise = fn(ctx, (content, next) => __awaiter(this, void 0, void 0, function* () {
                yield next();
            })).then(() => {
                if (complete) {
                    complete(ctx);
                }
                return ctx;
            }).catch((err) => {
                this.errorHandle(ctx, err);
            });
            return promise;
        };
    }
}
exports.Compose = Compose;
