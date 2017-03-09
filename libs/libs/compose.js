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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
var _ = require("lodash");
var ModelProxy;
(function (ModelProxy) {
    var Compose = (function () {
        function Compose() {
            this.middlewares = [];
        }
        Compose.prototype.use = function (func) {
            if (!_.isFunction(func)) {
                throw new TypeError("middleware must be a function！");
            }
            this.middlewares.push(func);
        };
        Compose.prototype.clear = function () {
            this.middlewares.length = 0;
        };
        Compose.prototype.compose = function () {
            var _this = this;
            if (!Array.isArray(this.middlewares))
                throw new TypeError("Middleware stack must be an array!");
            for (var _i = 0, _a = this.middlewares; _i < _a.length; _i++) {
                var fn = _a[_i];
                if (typeof fn !== "function")
                    throw new TypeError("Middleware must be composed of functions!");
            }
            return function (context, next) {
                return new Promise(function (resolve, reject) {
                    var index = -1;
                    var dispatch = function (i) {
                        return new Promise(function (resolve1) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var fn, err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fn = this.middlewares[i];
                                        if (i <= index) {
                                            return [2 /*return*/, reject(new Error("next() called multiple times" + i + "-" + index))];
                                        }
                                        index = i;
                                        if (i === this.middlewares.length)
                                            fn = next;
                                        if (!fn) {
                                            return [2 /*return*/, resolve1(context)];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, fn(context, function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, dispatch(i + 1)];
                                                        case 1:
                                                            _a.sent();
                                                            resolve1();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        console.log("compose error" + err_1);
                                        reject(err_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                    };
                    return dispatch(0).then(resolve.bind(context));
                });
            };
        };
        Compose.prototype.errorHandle = function (ctx, err) {
            ctx.isError = true;
            ctx.err = err;
            console.error("compose--", err);
        };
        Compose.prototype.callback = function (complete) {
            var _this = this;
            var fn = this.compose();
            return function (options) {
                var ctx = Object.assign(options || {}, {});
                var promise = fn(ctx, function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, next()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).then(function () {
                    complete(ctx);
                }).catch(function (err) {
                    _this.errorHandle(ctx, err);
                });
                return promise;
            };
        };
        return Compose;
    }());
    ModelProxy.Compose = Compose;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTRCO0FBSTVCLElBQWlCLFVBQVUsQ0EyRzFCO0FBM0dELFdBQWlCLFVBQVU7SUFJdkI7UUFHSTtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFPRCxxQkFBRyxHQUFILFVBQUksSUFBYztZQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUtELHVCQUFLLEdBQUw7WUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQU1ELHlCQUFPLEdBQVA7WUFBQSxpQkFxQ0M7WUFwQ0csRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFBQyxNQUFNLElBQUksU0FBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDaEcsR0FBRyxDQUFDLENBQWEsVUFBZ0IsRUFBaEIsS0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtnQkFBNUIsSUFBTSxFQUFFLFNBQUE7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDO29CQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQzthQUNsRztZQUVELE1BQU0sQ0FBQyxVQUFDLE9B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