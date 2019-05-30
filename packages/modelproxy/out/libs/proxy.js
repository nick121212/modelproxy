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
var interface_factory_1 = require("./interface.factory");
var engine_factory_1 = require("./engine.factory");
var compose_1 = require("./compose");
var errors_1 = require("./errors");
var base_factory_1 = require("./base.factory");
var ModelProxy = (function (_super) {
    __extends(ModelProxy, _super);
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
        if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
        var nsFactory = this.nsFactory.getItem(config.key);
        if (!nsFactory) {
            nsFactory = new interface_factory_1.InterfaceFactory(Object.assign({
                state: config.state,
                states: config.states,
                version: config.version
            }, overrideInterfaceConfig));
        }
        this.nsFactory.add(config.key, this.initInterfaces(nsFactory, config, Object.assign({}, nsFactory.overrideInterfaceConfig || {}, overrideInterfaceConfig)));
        return this;
    };
    ModelProxy.prototype.execute = function (ns, key, options) {
        if (options === void 0) { options = {}; }
        var otherOptions = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherOptions[_i - 3] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this.getInterface(ns, key);
                return [2, instance.execute.apply(instance, [options].concat(otherOptions))];
            });
        });
    };
    ModelProxy.prototype.executeAll = function (inters) {
        return __awaiter(this, void 0, void 0, function () {
            var maps;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var maps;
            return __generator(this, function (_a) {
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
        return !!this.nsFactory.getItem(ns);
    };
    ModelProxy.prototype.getNs = function (ns) {
        if (!this.nsFactory.has(ns)) {
            throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;");
        }
        return this.nsFactory.getItem(ns);
    };
    ModelProxy.prototype.getInterface = function (ns, key) {
        var nsFactory = this.getNs(ns);
        var inter = nsFactory.get(key);
        if (!inter) {
            throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4\u4E0B\u7684" + key + "\u63A5\u53E3;");
        }
        return inter;
    };
    ModelProxy.prototype.mixin = function (ns) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        if (!keys.length) {
            throw new errors_1.ModelProxyMissingError("\u5FC5\u987B\u5236\u5B9A\u81F3\u5C11\u4E00\u4E2AKey\uFF01");
        }
        var interfaces = this.getNs(ns), idKeys = [], lastKey = keys.pop(), lastInterface = interfaces.getItem(lastKey);
        if (!lastInterface) {
            return null;
        }
        keys.forEach(function (k) {
            var instance = interfaces.getItem(k);
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
        if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
        var defaultExecuteInfo = this.defaultExecuteInfo;
        config.interfaces.forEach(function (i) {
            var interModel = Object.assign({}, {
                defaultExecuteInfo: defaultExecuteInfo,
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states
            }, i, defaultExecuteInfo ? defaultExecuteInfo.instance || {} : {}, overrideInterfaceConfig || {});
            ifFactory.add(i.key, interModel, true);
        });
        return ifFactory;
    };
    return ModelProxy;
}(compose_1.Compose));
exports.ModelProxy = ModelProxy;
