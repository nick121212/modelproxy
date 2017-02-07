"use strict";
var engineFactory = require("./libs/engine.factory");
var proxy_1 = require("./libs/proxy");
var compose = require("./libs/compose");
var index_1 = require("./schemas/index");
var base = require("./engines/base");
var methodtype = require("./models/method");
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine
};
//# sourceMappingURL=index.js.map