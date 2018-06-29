"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_factory_1 = require("./base.factory");
const engine_factory_1 = require("./engine.factory");
class InterfaceFactory extends base_factory_1.BaseFactory {
    constructor() { super(); }
    add(name, instance, override = false) {
        super.add(name, instance, override);
        Object.assign(instance, {
            delete: this.custom.bind(this, instance, "DELETE"),
            execute: this.execute.bind(this, instance),
            get: this.custom.bind(this, instance, "GET"),
            getFullPath: this.getFullPath.bind(this, instance),
            getPath: this.getPath.bind(this, instance),
            post: this.custom.bind(this, instance, "POST", null),
            put: this.custom.bind(this, instance, "PUT"),
            replacePath: this.replacePath.bind(this, instance)
        });
    }
    async execute(instance, options, ...otherOptions) {
        let engine;
        let iinstance;
        let { instance: extraInstance = {} } = options;
        iinstance = this.megreInstance(instance, extraInstance);
        engine = engine_factory_1.engineFactory.use(iinstance.engine);
        try {
            await engine.validate(iinstance, options);
        }
        catch (e) {
            throw e;
        }
        return engine.proxy(iinstance, options, ...otherOptions);
    }
    async custom(instance, type, id, options = {}, ...otherOptions) {
        let { instance: extraInstance = {}, params = {} } = options, iiinstance;
        extraInstance.method = type;
        if (id) {
            extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
            params.__id__ = id;
        }
        options.instance = extraInstance;
        options.params = params;
        return await this.execute(instance, options, ...otherOptions);
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
