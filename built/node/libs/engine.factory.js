"use strict";
var factory = require("./base.factory");
var engines = require("../engines/default");
var ModelProxy;
(function (ModelProxy) {
    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=engine.factory.js.map