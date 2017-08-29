"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
class BaseFactory {
    constructor() {
        this.instances = {};
    }
    add(name, intance, override = false) {
        if (override && this.instances.hasOwnProperty(name)) {
            return console.error(`已经存在name=【${name}】的engine！`);
        }
        this.instances[name] = intance;
    }
    get(name) {
        if (this.instances.hasOwnProperty(name)) {
            return this.instances[name];
        }
        return null;
    }
    use(name) {
        if (!name || !this.instances.hasOwnProperty(name)) {
            let engines = Object.keys(this.instances);
            throw new errors_1.ModelProxyMissingError(`不存在name=【${name}】的engine！当前engines：【${engines.join(",")}】`);
        }
        return this.instances[name];
    }
}
exports.BaseFactory = BaseFactory;
