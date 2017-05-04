"use strict";
var engineFactory = require("./libs/engine.factory");
var proxy_1 = require("./libs/proxy");
var compose = require("./libs/compose");
var index_1 = require("./schemas/index");
var base = require("./engines/base");
var baseFactory = require("./libs/base.factory");
var methodtype = require("./models/method");
var errors = require("./libs/errors");
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine,
    BaseFactory: baseFactory.ModelProxy.BaseFactory,
    errors: errors
};
//# sourceMappingURL=index.js.map