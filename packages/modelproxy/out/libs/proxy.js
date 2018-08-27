"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var interface_factory_1 = require("./interface.factory");
var engine_factory_1 = require("./engine.factory");
var compose_1 = require("./compose");
var errors_1 = require("./errors");
var base_factory_1 = require("./base.factory");
var ModelProxy = (function (_super) {
    tslib_1.__extends(ModelProxy, _super);
    function ModelProxy(defaultExecuteInfo) {
        var _this = _super.call(this) || this;
        _this.defaultExecuteInfo = defaultExecuteInfo;
        _this.nsFactory = new base_factory_1.BaseFactory();
        _this.forEach = _this.nsFactory.forEach.bind(_this.nsFactory);
        return _this;
    }
    ModelProxy.prototype.addEngines = function (engines) {
        for (var key in engines) {
            if (engines.hasOwnProperty(key)) {
                engine_factory_1.engineFactory.add(key, engines[key], true);
            }
        }
        return this;
    };
    ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
        var nsFactory = this.nsFactory.get(config.key);
        if (!nsFactory) {
            this.nsFactory.add(config.key, this.initInterfaces(new interface_factory_1.InterfaceFactory(), config, overrideInterfaceConfig));
            return this;
        }
        this.nsFactory.add(config.key, this.initInterfaces(nsFactory, config, overrideInterfaceConfig));
        return this;
    };
    ModelProxy.prototype.execute = function (ns, key, options) {
        if (options === void 0) { options = {}; }
        var otherOptions = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherOptions[_i - 3] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var interfaces, instance;
            return tslib_1.__generator(this, function (_a) {
                interfaces = this.getNs(ns), instance = interfaces.get(key);
                if (!instance) {
                    throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0/" + ns + "/" + key + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                }
                return [2, instance.execute.apply(instance, [options].concat(otherOptions))];
            });
        });
    };
    ModelProxy.prototype.executeAll = function (inters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var maps;
            return tslib_1.__generator(this, function (_a) {
                maps = [];
                if (!inters || !Object.keys(inters).length) {
                    return [2, new Promise(function (resolve) {
                            resolve(null);
                        })];
                }
                Object.keys(inters).forEach(function (key) {
                    maps.push(inters[key]().then(function (data) {
                        return _a = {},
                            _a[key] = data,
                            _a;
                        var _a;
                    }));
                });
                return [2, Promise.all(maps).then(function (data) {
                        return data.reduce(function (prev, next) {
                            return Object.assign({}, prev, next);
                        });
                    })];
            });
        });
    };
    ModelProxy.prototype.race = function (inters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var maps;
            return tslib_1.__generator(this, function (_a) {
                maps = inters.map(function (inter) {
                    if (inter.then) {
                        return inter;
                    }
                    var _a = inter, _b = _a.ns, ns = _b === void 0 ? "" : _b, _c = _a.key, key = _c === void 0 ? "" : _c, _d = _a.options, options = _d === void 0 ? {} : _d, _e = _a.otherOptions, otherOptions = _e === void 0 ? [] : _e;
                    return _this.execute.apply(_this, [ns, key, options].concat(otherOptions));
                });
                return [2, Promise.race(maps)];
            });
        });
    };
    ModelProxy.prototype.hasNs = function (ns) {
        return !!this.nsFactory.get(ns);
    };
    ModelProxy.prototype.getNs = function (ns) {
        if (!this.hasNs(ns)) {
            throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;");
        }
        return this.nsFactory.use(ns);
    };
    ModelProxy.prototype.minix = function (ns) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        return this.mixin.apply(this, [ns].concat(keys));
    };
    ModelProxy.prototype.mixin = function (ns) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        if (!keys.length) {
            throw new errors_1.ModelProxyMissingError("\u5FC5\u987B\u5236\u5B9A\u81F3\u5C11\u4E00\u4E2AKey\uFF01");
        }
        var interfaces = this.getNs(ns), idKeys = [], lastKey = keys.pop(), lastInterface = interfaces.get(lastKey);
        if (!lastInterface) {
            return null;
        }
        keys.forEach(function (k) {
            var instance = interfaces.get(k);
            if (!instance) {
                throw new errors_1.ModelProxyMissingError(k + "\u4E0D\u5B58\u5728\u4E8E\u7A7A\u95F4" + ns + "\uFF01");
            }
            idKeys.push(instance);
        });
        return function () {
            var ids = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ids[_i] = arguments[_i];
            }
            if (ids.length !== idKeys.length) {
                throw new Error("\u4F20\u5165\u7684\u53C2\u6570\u4E2A\u6570\u4E0D\u6B63\u786E\uFF01");
            }
            var paths = [];
            idKeys.forEach(function (k, idx) {
                paths.push(k.replacePath({
                    instance: {
                        path: k.path + "/:" + k.key
                    },
                    params: (_a = {},
                        _a[k.key] = ids[idx],
                        _a)
                }));
                var _a;
            });
            lastInterface.path = paths.concat([lastInterface.path]).join("");
            return lastInterface;
        };
    };
    ModelProxy.prototype.initInterfaces = function (ifFactory, config, overrideInterfaceConfig) {
        var _this = this;
        if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
        config.interfaces.forEach(function (i) {
            var interModel = Object.assign({}, {
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states,
                defaultExecuteInfo: _this.defaultExecuteInfo
            }, i, overrideInterfaceConfig || {});
            ifFactory.add(i.key, interModel, true);
        });
        return ifFactory;
    };
    return ModelProxy;
}(compose_1.Compose));
exports.ModelProxy = ModelProxy;
