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
var pathToRegexp = require("path-to-regexp");
var compose_1 = require("../libs/compose");
var errors_1 = require("../libs/errors");
var util_1 = require("../util");
var URLSearchParams = util_1.globalObj.URLSearchParams;
var BaseEngine = (function (_super) {
    __extends(BaseEngine, _super);
    function BaseEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseEngine.prototype.validate = function (_instance, _options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, true];
            });
        });
    };
    BaseEngine.prototype.delay = function (interval) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve();
                        }, interval);
                    })];
            });
        });
    };
    BaseEngine.prototype.proxy = function (instance, options) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                instance.getPath(options.instance);
                return [2, {}];
            });
        });
    };
    BaseEngine.prototype.getStatePath = function (instance) {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }
        return "";
    };
    BaseEngine.prototype.replacePath = function (instance, _a) {
        var _b = _a.params, params = _b === void 0 ? {} : _b;
        var tokens = pathToRegexp.parse(instance.path || "/"), paths = [];
        tokens.forEach(function (token) {
            var name = token.name;
            if (!name) {
                paths.push(token);
            }
            else {
                if (!params[name]) {
                    throw new errors_1.ModelProxyMissingError("\u7F3A\u5C11[" + name + "]\u5B57\u6BB5\uFF01");
                }
                paths.push("/" + params[name]);
                delete params[name];
            }
        });
        return paths.join("");
    };
    BaseEngine.prototype.getFullPath = function (instance, options) {
        var url = [this.getStatePath(instance), this.replacePath(instance, options)], searchParams = new URLSearchParams();
        var params = options.params;
        if (params) {
            Object.keys(params).forEach(function (key) {
                searchParams.append(key, params[key]);
            });
            var qs = searchParams.toString();
            if (qs) {
                url.push("?" + qs);
            }
        }
        return url.join("");
    };
    return BaseEngine;
}(compose_1.Compose));
exports.BaseEngine = BaseEngine;
