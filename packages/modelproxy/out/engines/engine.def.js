"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var engine_base_1 = require("./engine.base");
var compose_1 = require("../libs/compose");
var DefaultEngine = (function (_super) {
    __extends(DefaultEngine, _super);
    function DefaultEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultEngine.prototype.doProxy = function (instance, executeInfo) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var c, before, after, error, beforeProxy, afterProxy, ctx, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        c = new compose_1.Compose();
                        before = executeInfo.before, after = executeInfo.after, error = executeInfo.error, beforeProxy = executeInfo.beforeProxy, afterProxy = executeInfo.afterProxy;
                        if (before) {
                            c.merge(before);
                        }
                        c.merge(this);
                        if (after) {
                            c.merge(after);
                        }
                        ctx = Object.assign.apply(Object, [{}].concat(otherOptions, [{
                                executeInfo: executeInfo,
                                instance: instance
                            }]));
                        if (beforeProxy) {
                            beforeProxy(ctx);
                        }
                        return [4, c.callback()(Object.assign.apply(Object, [{}].concat(otherOptions, [{
                                    executeInfo: executeInfo,
                                    instance: instance
                                }])))];
                    case 1:
                        ctx = _a.sent();
                        if (afterProxy) {
                            afterProxy(ctx);
                        }
                        if (!ctx.isError) return [3, 4];
                        err = ctx.err;
                        if (!error) return [3, 3];
                        return [4, error.callback()(ctx)];
                    case 2:
                        ctx = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (ctx.isError) {
                            throw err || ctx.err;
                        }
                        _a.label = 4;
                    case 4: return [2, ctx];
                }
            });
        });
    };
    DefaultEngine.prototype.proxy = function (instance, executeInfo) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.doProxy.apply(this, [instance, executeInfo].concat(otherOptions))];
            });
        });
    };
    return DefaultEngine;
}(engine_base_1.BaseEngine));
exports.DefaultEngine = DefaultEngine;
