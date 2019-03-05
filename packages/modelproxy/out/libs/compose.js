"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Compose = (function () {
    function Compose() {
        var wares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            wares[_i] = arguments[_i];
        }
        this.middlewares = wares.slice();
    }
    Compose.prototype.use = function (func) {
        if (typeof func !== "function") {
            throw new TypeError("middleware must be a function！");
        }
        this.middlewares.push(func);
    };
    Compose.prototype.clear = function () {
        this.middlewares.length = 0;
    };
    Compose.prototype.compose = function () {
        var _this = this;
        var middlewares = this.middlewares;
        if (!Array.isArray(middlewares)) {
            throw new TypeError("Middleware stack must be an array!");
        }
        for (var _i = 0, middlewares_1 = middlewares; _i < middlewares_1.length; _i++) {
            var fn = middlewares_1[_i];
            if (typeof fn !== "function") {
                throw new TypeError("Middleware must be composed of functions!");
            }
        }
        return function (context, next) {
            return new Promise(function (resolve, reject) {
                var index = -1;
                var dispatch = function (i) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var fn, e_1;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                fn = middlewares[i];
                                if (i <= index) {
                                    return [2, reject(new Error("next() called multiple times" + i + "-" + index))];
                                }
                                index = i;
                                if (i === middlewares.length) {
                                    fn = next;
                                }
                                if (!fn) {
                                    return [2, context];
                                }
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, fn(context, function (key) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                        return tslib_1.__generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (key === "abort") {
                                                        return [2];
                                                    }
                                                    return [4, dispatch(i + 1)];
                                                case 1:
                                                    _a.sent();
                                                    return [2];
                                            }
                                        });
                                    }); })];
                            case 2:
                                _a.sent();
                                return [3, 4];
                            case 3:
                                e_1 = _a.sent();
                                reject(e_1);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                }); };
                return dispatch(0).then(resolve.bind(context));
            });
        };
    };
    Compose.prototype.getMiddlewares = function () {
        return this.middlewares.concat([]);
    };
    Compose.prototype.merge = function (c, top) {
        var _this = this;
        if (top === void 0) { top = false; }
        var middles = c.getMiddlewares();
        var topMiddles = [];
        middles.forEach(function (m) {
            if (top) {
                topMiddles.push(m);
            }
            else {
                _this.use(m);
            }
        });
        this.middlewares = topMiddles.concat(this.middlewares);
        return this;
    };
    Compose.prototype.errorHandle = function (ctx, err) {
        ctx.isError = true;
        ctx.err = err;
    };
    Compose.prototype.callback = function (complete) {
        var _this = this;
        var fn = this.compose();
        return function (options) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var ctx, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = Object.assign(options || {}, {});
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, fn(ctx, function (content, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, next()];
                                        case 1:
                                            _a.sent();
                                            if (ctx.isError) {
                                                throw ctx.err;
                                            }
                                            return [2];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.errorHandle(ctx, err_1);
                        return [3, 4];
                    case 4: return [2, ctx];
                }
            });
        }); };
    };
    return Compose;
}());
exports.Compose = Compose;
