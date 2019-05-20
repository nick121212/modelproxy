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
var base_factory_1 = require("./base.factory");
var engine_factory_1 = require("./engine.factory");
var InterfaceFactory = (function (_super) {
    __extends(InterfaceFactory, _super);
    function InterfaceFactory(overrideInterfaceConfig) {
        var _this = _super.call(this) || this;
        _this.overrideInterfaceConfig = overrideInterfaceConfig;
        return _this;
    }
    InterfaceFactory.prototype.add = function (name, instance, override) {
        if (override === void 0) { override = false; }
        _super.prototype.add.call(this, name, Object.assign(instance, {
            delete: this.custom.bind(this, instance, "DELETE"),
            execute: this.execute.bind(this, instance),
            get: this.custom.bind(this, instance, "GET", null),
            getFullPath: this.getFullPath.bind(this, instance),
            getOne: this.custom.bind(this, instance, "GET"),
            getPath: this.getPath.bind(this, instance),
            post: this.custom.bind(this, instance, "POST", null),
            put: this.custom.bind(this, instance, "PUT"),
            replacePath: this.replacePath.bind(this, instance)
        }), override);
    };
    InterfaceFactory.prototype.execute = function (instance, options) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var engine, instanceMerge, _a, extraInstance, engineName, _b, defaultExecuteInfo, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a;
                        instanceMerge = this.mergeInstance(instance, extraInstance);
                        engineName = instanceMerge.engine, _b = instanceMerge.defaultExecuteInfo, defaultExecuteInfo = _b === void 0 ? {} : _b;
                        if (!engine_factory_1.engineFactory.has(engineName || "")) {
                            throw new Error("engine [" + engineName + "] can't be found.");
                        }
                        engine = engine_factory_1.engineFactory.getItem(engineName || "default");
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4, engine.validate(instanceMerge, options)];
                    case 2:
                        _c.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _c.sent();
                        throw e_1;
                    case 4: return [2, engine.proxy.apply(engine, [instanceMerge, Object.assign({}, defaultExecuteInfo, options)].concat(otherOptions))];
                }
            });
        });
    };
    InterfaceFactory.prototype.custom = function (instance, type, id, options) {
        if (options === void 0) { options = {}; }
        var otherOptions = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            otherOptions[_i - 4] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, extraInstance, _b, params;
            return __generator(this, function (_c) {
                _a = options.instance, extraInstance = _a === void 0 ? {} : _a, _b = options.params, params = _b === void 0 ? {} : _b;
                extraInstance.method = type;
                if (id) {
                    extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
                    params.__id__ = id;
                }
                options.instance = extraInstance;
                options.params = params;
                return [2, this.execute.apply(this, [instance, options].concat(otherOptions))];
            });
        });
    };
    InterfaceFactory.prototype.mergeInstance = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        return Object.assign({}, instance, extendInstance);
    };
    InterfaceFactory.prototype.executeEngineMethod = function (instance, extendInstance, method, options) {
        if (extendInstance === void 0) { extendInstance = {}; }
        if (options === void 0) { options = {}; }
        var instanceMerge = this.mergeInstance(instance, extendInstance);
        var engine = engine_factory_1.engineFactory.getItem("default");
        var methodFunc = engine[method];
        if (methodFunc) {
            return methodFunc.call(engine_factory_1.engineFactory.getItem("default"), instanceMerge, options);
        }
        return "";
    };
    InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        var instanceMerge;
        instanceMerge = this.mergeInstance(instance, extendInstance);
        return this.executeEngineMethod(instance, extendInstance, "getStatePath") + instanceMerge.path;
    };
    InterfaceFactory.prototype.getFullPath = function (instance, options) {
        if (options === void 0) { options = {}; }
        return this.executeEngineMethod(instance, options.instance, "getFullPath", options);
    };
    InterfaceFactory.prototype.replacePath = function (instance, options) {
        if (options === void 0) { options = {}; }
        var engine, instanceMerge;
        instanceMerge = this.mergeInstance(instance, options.instance);
        engine = engine_factory_1.engineFactory.getItem("default");
        return engine.replacePath(instanceMerge, options);
    };
    return InterfaceFactory;
}(base_factory_1.BaseFactory));
exports.InterfaceFactory = InterfaceFactory;
