"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_schema_1 = require("./interface.schema");
var builder_1 = require("./builder");
var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
exports.default = JsonSchemaBuilder.init().build("object", null, "modelProxy验证配置")
    .properties({
    key: JsonSchemaBuilder.init().build().toValue(),
    title: JsonSchemaBuilder.init().build().toValue(),
    engine: JsonSchemaBuilder.init().build().toValue(),
    states: JsonSchemaBuilder.init().build("object").toValue(),
    state: JsonSchemaBuilder.init().build().toValue(),
    version: JsonSchemaBuilder.init().build().toValue(),
    mockDir: JsonSchemaBuilder.init().build().toValue(),
    interfaces: JsonSchemaBuilder.init().build("array", "接口配置数组")
        .items(interface_schema_1.default).toValue(),
}).required("key", "title", "states").toValue();
//# sourceMappingURL=proxy.config.schema.js.map