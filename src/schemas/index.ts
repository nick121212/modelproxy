import { ModleProxySchema } from "./builder";
import proxyConfigSchema from "./proxy.config.schema";
import interfaceSchema from "./interface.schema";

export default {
    proxyConfigSchema: proxyConfigSchema,
    interfaceSchema: interfaceSchema,
    JsonSchemaBuilder: ModleProxySchema.JsonSchemaBuilder
};