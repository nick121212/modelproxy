"use strict";
var errors_1 = require("./errors");
var ModelProxy;
(function (ModelProxy) {
    /**
     * 实例的工厂类
     */
    var BaseFactory = (function () {
        function BaseFactory() {
            this.instances = {};
        }
        /**
         * 添加一个实例
         * @param name     {string}    实例的名称
         * @param engine   {IEngine}   实例
         * @param override {boolean}   是否覆盖
         * @return         {void}
         */
        BaseFactory.prototype.add = function (name, intance, override) {
            if (override === void 0) { override = false; }
            if (override && this.instances.hasOwnProperty(name)) {
                return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
            }
            this.instances[name] = intance;
        };
        /**
         * 获取一个实例
         * @param name    {String}  实例标志
         */
        BaseFactory.prototype.get = function (name) {
            if (this.instances.hasOwnProperty(name)) {
                return this.instances[name];
            }
            return null;
        };
        /**
        * 取出一个实例
        * @param name     {string}    实例的名称
        * @return         {IEngine}
        */
        BaseFactory.prototype.use = function (name) {
            if (!name || !this.instances.hasOwnProperty(name)) {
                var engines = Object.keys(this.instances);
                // let engines = _.map(this.instances, (val, key) => {
                //     return key;
                // });
                throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
            }
            return this.instances[name];
        };
        return BaseFactory;
    }());
    ModelProxy.BaseFactory = BaseFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=base.factory.js.map