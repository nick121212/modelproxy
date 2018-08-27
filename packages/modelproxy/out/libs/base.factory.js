"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var BaseFactory = (function () {
    function BaseFactory() {
        this.instances = {};
    }
    BaseFactory.prototype.add = function (name, intance, override) {
        if (override === void 0) { override = false; }
        if (override && this.instances.hasOwnProperty(name)) {
            return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
        }
        this.instances[name] = intance;
    };
    BaseFactory.prototype.remove = function (name) {
        if (this.has(name)) {
            delete this.instances[name];
        }
    };
    BaseFactory.prototype.has = function (name) {
        return !!this.get(name);
    };
    BaseFactory.prototype.get = function (name) {
        if (this.instances.hasOwnProperty(name)) {
            return this.instances[name];
        }
        return null;
    };
    BaseFactory.prototype.use = function (name) {
        if (!name || !this.instances.hasOwnProperty(name)) {
            var engines = Object.keys(this.instances);
            throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(",") + "\u3011");
        }
        return this.instances[name];
    };
    BaseFactory.prototype.forEach = function (fn) {
        if (!fn || fn.constructor !== Function) {
            return;
        }
        for (var key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                var element = this.instances[key];
                fn(key, element);
            }
        }
    };
    return BaseFactory;
}());
exports.BaseFactory = BaseFactory;
