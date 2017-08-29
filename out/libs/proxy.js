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
var ModelProxy = (function (_super) {
    __extends(ModelProxy, _super);
    function ModelProxy() {
        var _this = _super.call(this) || this;
        _this.interfaces = {};
        return _this;
    }
    ModelProxy.prototype.addEngines = function (engines) {
        for (var key in engines) {
            if (engines.hasOwnProperty(key)) {
                var element = engines[key];
                engine_factory_1.engineFactory.add(key, element, true);
            }
        }
        return this;
    };
    ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.interfaces[config.key] = this.initInterfaces(config, overrideInterfaceConfig);
                return [2, this];
            });
        });
    };
    ModelProxy.prototype.execute = function (ns, key, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var interfaces, instance;
            return __generator(this, function (_a) {
                interfaces = this.getNs(ns);
                instance = interfaces.get(key);
                if (!instance) {
                    throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0/" + ns + "/" + key + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                }
                return [2, instance.execute(options)];
            });
        });
    };
    ModelProxy.prototype.getNs = function (ns) {
        if (!this.interfaces.hasOwnProperty(ns)) {
            var nses = [];
            for (var key in this.interfaces) {
                if (this.interfaces.hasOwnProperty(key)) {
                    var element = this.interfaces[key];
                    nses.push(key);
                }
            }
            throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u3010" + nses.join(",") + "\u3011");
        }
        return this.interfaces[ns];
    };
    ModelProxy.prototype.initInterfaces = function (config, overrideInterfaceConfig) {
        if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
        var ifFactory = new interface_factory_1.InterfaceFactory();
        config.interfaces.forEach(function (i) {
            ifFactory.add(i.key, Object.assign({}, {
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states,
            }, i, overrideInterfaceConfig || {}));
        });
        return ifFactory;
    };
    return ModelProxy;
}(compose_1.Compose));
exports.ModelProxy = ModelProxy;
