"use strict";
var errors_1 = require("./errors");
var ModelProxy;
(function (ModelProxy) {
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
        BaseFactory.prototype.get = function (name) {
            if (this.instances.hasOwnProperty(name)) {
                return this.instances[name];
            }
            return null;
        };
        BaseFactory.prototype.use = function (name) {
            if (!name || !this.instances.hasOwnProperty(name)) {
                var engines = Object.keys(this.instances);
                throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
            }
            return this.instances[name];
        };
        return BaseFactory;
    }());
    ModelProxy.BaseFactory = BaseFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvYmFzZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBa0Q7QUFFbEQsSUFBaUIsVUFBVSxDQWtEMUI7QUFsREQsV0FBaUIsVUFBVTtJQUl2QjtRQUdJO1lBRlUsY0FBUyxHQUF5QixFQUFFLENBQUM7UUFFL0IsQ0FBQztRQVFqQix5QkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLE9BQVUsRUFBRSxRQUF5QjtZQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtZQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBYSxJQUFJLDZCQUFXLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDbkMsQ0FBQztRQU1ELHlCQUFHLEdBQUgsVUFBSSxJQUFZO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBTUQseUJBQUcsR0FBSCxVQUFJLElBQVk7WUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBSTFDLE1BQU0sSUFBSSwrQkFBc0IsQ0FBQyxrQ0FBWSxJQUFJLCtEQUF1QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFHLENBQUMsQ0FBQztZQUNsRyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FBQyxBQTdDRCxJQTZDQztJQTdDWSxzQkFBVyxjQTZDdkIsQ0FBQTtBQUNMLENBQUMsRUFsRGdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBa0QxQiJ9