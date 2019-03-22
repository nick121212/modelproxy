"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseFactory = (function () {
    function BaseFactory() {
        this.instances = {};
        this.length = 0;
    }
    BaseFactory.prototype.add = function (name, instance, override) {
        if (override === void 0) { override = false; }
        if (override && this.instances.hasOwnProperty(name)) {
            return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
        }
        this.instances[name] = instance;
        this.length++;
    };
    BaseFactory.prototype.setItem = function (key, value) {
        this.add(key, value);
    };
    BaseFactory.prototype.remove = function (name) {
        if (this.has(name)) {
            this.length--;
        }
        return Reflect.deleteProperty(this.instances, name);
    };
    BaseFactory.prototype.removeItem = function (name) {
        this.remove(name);
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
    BaseFactory.prototype.getItem = function (name) {
        return this.get(name);
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
    BaseFactory.prototype.clear = function () {
        this.instances = {};
        this.length = 0;
    };
    BaseFactory.prototype.key = function (index) {
        return "";
    };
    return BaseFactory;
}());
exports.BaseFactory = BaseFactory;
