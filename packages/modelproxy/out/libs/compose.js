"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
                var dispatch = function (i) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var fn, e_1;
                    return __generator(this, function (_a) {
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
                                return [4, fn(context, function (key) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
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
        return function (options) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var ctx, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = Object.assign(options || {}, {});
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, fn(ctx, function (content, next) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
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
