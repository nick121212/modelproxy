/// <reference types="tv4" />
export declare namespace ModleProxySchema {
    abstract class BaseTypeBuilder {
        protected data: tv4.JsonSchema;
        constructor();
        build(type?: string, title?: string, description?: string): BaseTypeBuilder;
        properties(props: {
            [key: string]: tv4.JsonSchema;
        }): JsonSchemaBuilder;
        items(items: tv4.JsonSchema | tv4.JsonSchema[]): JsonSchemaBuilder;
        schema(schema?: string, id?: string): BaseTypeBuilder;
        required(...keys: string[]): this;
        toValue(): tv4.JsonSchema;
    }
    class JsonSchemaBuilder extends BaseTypeBuilder {
        constructor();
        static init(): JsonSchemaBuilder;
    }
}
