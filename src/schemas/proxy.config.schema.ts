import interfaceSchema from "./interface.schema";
import { ModleProxySchema } from "./builder";

const { JsonSchemaBuilder } = ModleProxySchema;

export default JsonSchemaBuilder.init().build("object", null, "modelProxy验证配置")
    .properties({
        key: JsonSchemaBuilder.init().build().toValue(),
        title: JsonSchemaBuilder.init().build().toValue(),
        engine: JsonSchemaBuilder.init().build().toValue(),
        states: JsonSchemaBuilder.init().build("object").toValue(),
        state: JsonSchemaBuilder.init().build().toValue(),
        version: JsonSchemaBuilder.init().build().toValue(),
        mockDir: JsonSchemaBuilder.init().build().toValue(),
        interfaces: JsonSchemaBuilder.init().build("array", "接口配置数组")
            .items(interfaceSchema).toValue(),
    }).required("key", "title", "states").toValue();