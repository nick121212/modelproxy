"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var interfaceFactory = require("./interface.factory");
var engineFactory = require("./engine.factory");
var index_1 = require("../schemas/index");
var compose = require("./compose");
var tv4 = require("tv4");
var jsonPointer = require("json-pointer");
var errors_1 = require("./errors");
var ModelProxy;
(function (ModelProxy_1) {
    var ModelProxy = (function (_super) {
        __extends(ModelProxy, _super);
        function ModelProxy() {
            var _this = _super.call(this) || this;
            _this.interfaces = {};
            return _this;
        }
        ModelProxy.prototype.addEngines = function (engines) {
            for (var key in engines) {
                engineFactory.ModelProxy.engineFactory.add(key, engines[key], true);
            }
            return this;
        };
        ModelProxy.prototype.initInterfaces = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            var ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();
            config.interfaces.forEach(function (i) {
                ifFactory.add(i.key, Object.assign({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i, overrideInterfaceConfig || {}));
            });
            return ifFactory;
        };
        ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var valid;
                return __generator(this, function (_a) {
                    valid = tv4.validateResult(config, index_1.default.proxyConfigSchema);
                    if (!valid.valid) {
                        throw valid.error;
                    }
                    this.interfaces[config.key] = this.initInterfaces(config, overrideInterfaceConfig);
                    return [2 /*return*/, this];
                });
            });
        };
        ModelProxy.prototype.execute = function (path, options) {
            return __awaiter(this, void 0, void 0, function () {
                var interfaceInstance;
                return __generator(this, function (_a) {
                    interfaceInstance = null;
                    if (!jsonPointer.has(this.interfaces, path)) {
                        throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                    }
                    interfaceInstance = jsonPointer.get(this.interfaces, path);
                    return [2 /*return*/, interfaceInstance(options)];
                });
            });
        };
        ModelProxy.prototype.getHost = function (path, instance) {
            var interfaceInstance = null;
            if (!jsonPointer.has(this.interfaces, path)) {
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
            }
            interfaceInstance = jsonPointer.get(this.interfaces, path);
            return interfaceInstance["getPath"](instance);
        };
        ModelProxy.prototype.getNs = function (ns) {
            if (!this.interfaces.hasOwnProperty(ns)) {
                var nses = [];
                for (var key in this.interfaces) {
                    nses.push(key);
                }
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u3010" + nses.join(',') + "\u3011");
            }
            return this.interfaces[ns];
        };
        return ModelProxy;
    }(compose.ModelProxy.Compose));
    ModelProxy_1.ModelProxy = ModelProxy;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHNEQUF3RDtBQUN4RCxnREFBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLG1DQUFxQztBQUNyQyx5QkFBMkI7QUFDM0IsMENBQTRDO0FBQzVDLG1DQUFrRDtBQUVsRCxJQUFpQixVQUFVLENBa0kxQjtBQWxJRCxXQUFpQixZQUFVO0lBQ3ZCO1FBQWdDLDhCQUErQjtRQUczRDtZQUFBLFlBQ0ksaUJBQU8sU0FDVjtZQUpPLGdCQUFVLEdBQW9FLEVBQUUsQ0FBQzs7UUFJekYsQ0FBQztRQU1ELCtCQUFVLEdBQVYsVUFBVyxPQUFtQztZQUMxQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBT08sbUNBQWMsR0FBdEIsVUFBdUIsTUFBb0IsRUFBRSx1QkFBNkM7WUFBN0Msd0NBQUEsRUFBQSw0QkFBNkM7WUFDdEYsSUFBSSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUVuRSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQWtCO2dCQUN6QyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRztvQkFDZCxNQUFNLEVBQUUsTUFBTSxD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