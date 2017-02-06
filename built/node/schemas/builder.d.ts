export declare namespace ModleProxySchema {
    abstract class BaseTypeBuilder {
        protected data: JsonSchema;
        constructor();
        build(type?: JsonSchemaTypes, title?: string, description?: string): BaseTypeBuilder;
        properties(props: {
            [key: string]: JsonSchema;
        }): JsonSchemaBuilder;
        items(items: JsonSchema | JsonSchema[]): JsonSchemaBuilder;
        schema(schema?: string, id?: string): BaseTypeBuilder;
        required(...keys: any[]): this;
        toValue(): JsonSchema;
    }
    class JsonSchemaBuilder extends BaseTypeBuilder {
        constructor();
        static init(): JsonSchemaBuilder;
    }
}
