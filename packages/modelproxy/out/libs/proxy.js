"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_factory_1 = require("./interface.factory");
const engine_factory_1 = require("./engine.factory");
const compose_1 = require("./compose");
const errors_1 = require("./errors");
const base_factory_1 = require("./base.factory");
class ModelProxy extends compose_1.Compose {
    constructor(defaultExecuteInfo) {
        super();
        this.defaultExecuteInfo = defaultExecuteInfo;
        this.nsFactory = new base_factory_1.BaseFactory();
        this.forEach = this.nsFactory.forEach.bind(this.nsFactory);
    }
    addEngines(engines) {
        for (let key in engines) {
            if (engines.hasOwnProperty(key)) {
                engine_factory_1.engineFactory.add(key, engines[key], true);
            }
        }
        return this;
    }
    loadConfig(config, overrideInterfaceConfig) {
        let nsFactory = this.nsFactory.get(config.key);
        if (!nsFactory) {
            this.nsFactory.add(config.key, this.initInterfaces(new interface_factory_1.InterfaceFactory(), config, overrideInterfaceConfig));
            return this;
        }
        this.nsFactory.add(config.key, this.initInterfaces(nsFactory, config, overrideInterfaceConfig));
        return this;
    }
    async execute(ns, key, options = {}, ...otherOptions) {
        const interfaces = this.getNs(ns), instance = interfaces.get(key);
        if (!instance) {
            throw new errors_1.ModelProxyMissingError(`没有发现/${ns}/${key}的接口方法！`);
        }
        return instance.execute(options, ...otherOptions);
    }
    async executeAll(inters) {
        const maps = [];
        if (!inters || !Object.keys(inters).length) {
            return new Promise((resolve) => {
                resolve(null);
            });
        }
        Object.keys(inters).forEach((key) => {
            maps.push(inters[key]().then((data) => {
                return {
                    [key]: data
                };
            }));
        });
        return Promise.all(maps).then((data) => {
            return data.reduce((prev, next) => {
                return Object.assign({}, prev, next);
            });
        });
    }
    async race(inters) {
        const maps = inters.map((inter) => {
            if (inter.then) {
                return inter;
            }
            const { ns = "", key = "", options = {}, otherOptions = [] } = inter;
            return this.execute(ns, key, options, ...otherOptions);
        });
        return Promise.race(maps);
    }
    hasNs(ns) {
        return !!this.nsFactory.get(ns);
    }
    getNs(ns) {
        if (!this.hasNs(ns)) {
            throw new errors_1.ModelProxyMissingError(`没有找到${ns}空间;`);
        }
        return this.nsFactory.use(ns);
    }
    minix(ns, ...keys) {
        return this.mixin(ns, ...keys);
    }
    mixin(ns, ...keys) {
        if (!keys.length) {
            throw new errors_1.ModelProxyMissingError(`必须制定至少一个Key！`);
        }
        const interfaces = this.getNs(ns), idKeys = [], lastKey = keys.pop(), lastInterface = interfaces.get(lastKey);
        if (!lastInterface) {
            return null;
        }
        keys.forEach((k) => {
            let instance = interfaces.get(k);
            if (!instance) {
                throw new errors_1.ModelProxyMissingError(`${k}不存在于空间${ns}！`);
            }
            idKeys.push(instance);
        });
        return (...ids) => {
            if (ids.length !== idKeys.length) {
                throw new Error(`传入的参数个数不正确！`);
            }
            let paths = [];
            idKeys.forEach((k, idx) => {
                paths.push(k.replacePath({
                    instance: {
                        path: k.path + "/:" + k.key
                    },
                    params: {
                        [k.key]: ids[idx]
                    }
                }));
            });
            lastInterface.path = paths.concat([lastInterface.path]).join("");
            return lastInterface;
        };
    }
    initInterfaces(ifFactory, config, overrideInterfaceConfig = {}) {
        config.interfaces.forEach((i) => {
            const interModel = Object.assign({}, {
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states,
                defaultExecuteInfo: this.defaultExecuteInfo
            }, i, overrideInterfaceConfig || {});
            ifFactory.add(i.key, interModel, true);
        });
        return ifFactory;
    }
}
exports.ModelProxy = ModelProxy;
