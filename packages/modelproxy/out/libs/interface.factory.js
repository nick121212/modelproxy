"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_factory_1 = require("./base.factory");
var engine_factory_1 = require("./engine.factory");
var InterfaceFactory = (function (_super) {
    tslib_1.__extends(InterfaceFactory, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var engine, iinstance, _a, extraInstance, engineName, _b, defaultExecuteInfo, e_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a;
                        iinstance = this.megreInstance(instance, extraInstance);
                        engineName = iinstance.engine, _b = iinstance.defaultExecuteInfo, defaultExecuteInfo = _b === void 0 ? {} : _b;
                        if (!engine_factory_1.engineFactory.has(engineName || "")) {
                            throw new Error("\u6CA1\u6709\u53D1\u73B0engine[" + engineName + "]");
                        }
                        engine = engine_factory_1.engineFactory.use(engineName || "default");
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4, engine.validate(iinstance, options)];
                    case 2:
                        _c.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _c.sent();
                        throw e_1;
                    case 4: return [2, engine.proxy.apply(engine, [iinstance, Object.assign({}, defaultExecuteInfo, options)].concat(otherOptions))];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, extraInstance, _b, params, iiinstance;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a, _b = options.params, params = _b === void 0 ? {} : _b;
                        extraInstance.method = type;
                        if (id) {
                            extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
                            params.__id__ = id;
                        }
                        options.instance = extraInstance;
                        options.params = params;
                        return [4, this.execute.apply(this, [instance, options].concat(otherOptions))];
                    case 1: return [2, _c.sent()];
                }
            });
        });
    };
    InterfaceFactory.prototype.megreInstance = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        return Object.assign({}, instance, extendInstance);
    };
    InterfaceFactory.prototype.executeEngineMethod = function (instance, extendInstance, method, options) {
        if (extendInstance === void 0) { extendInstance = {}; }
        if (options === void 0) { options = {}; }
        var engine, methodFunc, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        engine = engine_factory_1.engineFactory.use("default");
        methodFunc = engine[method];
        if (methodFunc) {
            return methodFunc.call(engine, iinstance, options);
        }
        return "";
    };
    InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        var engine, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        return this.executeEngineMethod(instance, extendInstance, "getStatePath") + iinstance.path;
    };
    InterfaceFactory.prototype.getFullPath = function (instance, options) {
        if (options === void 0) { options = {}; }
        return this.executeEngineMethod(instance, options.instance, "getFullPath", options);
    };
    InterfaceFactory.prototype.replacePath = function (instance, options) {
        if (options === void 0) { options = {}; }
        var engine, iinstance;
        iinstance = this.megreInstance(instance, options.instance);
        engine = engine_factory_1.engineFactory.use("default");
        return engine.replacePath(iinstance, options);
    };
    return InterfaceFactory;
}(base_factory_1.BaseFactory));
exports.InterfaceFactory = InterfaceFactory;
