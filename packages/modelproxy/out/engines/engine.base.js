"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pathToRegexp = require("path-to-regexp");
var URLSearchParams = require("url-search-params");
var compose_1 = require("../libs/compose");
var errors_1 = require("../libs/errors");
var BaseEngine = (function (_super) {
    tslib_1.__extends(BaseEngine, _super);
    function BaseEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseEngine.prototype.validate = function (_instance, _options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, true];
            });
        });
    };
    BaseEngine.prototype.delay = function (interval) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
