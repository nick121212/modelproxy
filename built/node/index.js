"use strict";
var engineFactory = require("./libs/engine.factory");
var modelproxy_1 = require("./libs/modelproxy");
var compose = require("./libs/compose");
var schemas_1 = require("./schemas");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ModelProxy: modelproxy_1.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: schemas_1.default
};
//# sourceMappingURL=index.js.map