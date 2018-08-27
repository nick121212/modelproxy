"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_factory_1 = require("./base.factory");
const engine_factory_1 = require("./engine.factory");
class InterfaceFactory extends base_factory_1.BaseFactory {
    constructor() { super(); }
    add(name, instance, override = false) {
        super.add(name, Object.assign(instance, {
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
    }
    execute(instance, options, ...otherOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let engine;
            let iinstance;
            let { instance: extraInstance = {} } = options;
            iinstance = this.megreInstance(instance, extraInstance);
            const { engine: engineName, defaultExecuteInfo = {} } = iinstance;
            if (!engine_factory_1.engineFactory.has(engineName || "")) {
                throw new Error(`没有发现engine[${engineName}]`);
            }
            engine = engine_factory_1.engineFactory.use(engineName || "default");
            try {
                yield engine.validate(iinstance, options);
            }
            catch (e) {
                throw e;
            }
            return engine.proxy(iinstance, Object.assign({}, defaultExecuteInfo, options), ...otherOptions);
        });
    }
    custom(instance, type, id, options = {}, ...otherOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let { instance: extraInstance = {}, params = {} } = options, iiinstance;
            extraInstance.method = type;
            if (id) {
                extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
                params.__id__ = id;
            }
            options.instance = extraInstance;
            options.params = params;
            return yield this.execute(instance, options, ...otherOptions);
        });
    }
    megreInstance(instance, extendInstance = {}) {
        return Object.assign({}, instance, extendInstance);
    }
    executeEngineMethod(instance, extendInstance = {}, method, options = {}) {
        let engine, methodFunc, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        engine = engine_factory_1.engineFactory.use("default");
        methodFunc = engine[method];
        if (methodFunc) {
            return methodFunc.call(engine, iinstance, options);
        }
        return "";
    }
    getPath(instance, extendInstance = {}) {
        let engine, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        return this.executeEngineMethod(instance, extendInstance, "getStatePath") + iinstance.path;
    }
    getFullPath(instance, options = {}) {
        return this.executeEngineMethod(instance, options.instance, "getFullPath", options);
    }
    replacePath(instance, options = {}) {
        let engine, iinstance;
        iinstance = this.megreInstance(instance, options.instance);
        engine = engine_factory_1.engineFactory.use("default");
        return engine.replacePath(iinstance, options);
    }
}
exports.InterfaceFactory = InterfaceFactory;
