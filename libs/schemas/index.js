"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./builder");
var proxy_config_schema_1 = require("./proxy.config.schema");
var interface_schema_1 = require("./interface.schema");
exports.default = {
    proxyConfigSchema: proxy_config_schema_1.default,
    interfaceSchema: interface_schema_1.default,
    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
};
//# sourceMappingURL=index.js.map