declare module 'modelproxy' {

    namespace ModelProxySchema {
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

        interface _default {
            proxyConfigSchema: JsonSchema;
            interfaceSchema: JsonSchema;
            JsonSchemaBuilder: JsonSchemaBuilder;
        }
    }
    namespace ModelProxyEngine {
        class DefaultEngine extends ModelProxy.Compose implements ModelProxy.IEngine {
            constructor();
            validate(data: any): boolean;
            proxy(intance: ModelProxy.IInterfaceModel, data: any, params: any): Promise<any>;
        }
    }
    namespace ModelProxy {
        enum MethodType {
            GET,
            POST,
            DELETE,
            PUT,
            HEAD,
            PATCH,
            OPTIONS
        }
        interface IInterfaceModel extends ICommon {
            ns?: string;
            method: MethodType;
            path: string;
            config?: Object;
        }
        interface ICommon {
            key: string;
            title: string;
            engine?: string;
            states?: { [id: string]: string; };
            state?: string;
            version?: string;
            mockDir?: string;
        }
        interface IProxyConfig extends ICommon {
            interfaces: Array<IInterfaceModel>;
        }
        interface IEngine {
            validate(data: any): boolean;
            proxy(intance: IInterfaceModel, data: any, params: any): any;
        }
        class BaseFactory<T> {
            protected intances: {
                [id: string]: T;
            };
            constructor();
            add(name: string, intance: T, override?: boolean): void;
            use(name: string): T;
        }
        class Compose {
            private middlewares;
            constructor();
            use(func: Function): void;
            compose(): Function;
            errorHandle(ctx: any, err: Error): void;
            callback(complete: Function): Function;
        }
        const engineFactory: BaseFactory<IEngine>;
        class InterfaceFactory extends BaseFactory<IInterfaceModel> {
            constructor();
            add(name: string, intance: IInterfaceModel, override?: boolean): void;
            execute(intance: IInterfaceModel, data: any, params: any, intanceCover: IInterfaceModel): Promise<any>;
        }
        class ModelProxy extends Compose {
            private interfaces;
            constructor();
            private initInterfaces(config: IProxyConfig);
            loadConfig(config: IProxyConfig): Promise<this>;
            getNs(ns: string): InterfaceFactory;
        }

        interface _default {
            ModelProxy: ModelProxy;
            engineFactory: BaseFactory<IEngine>;
            Compose: Compose;
            modelProxySchemaUtils: ModelProxySchema._default;
        }
    }

    // var modelproxy: ModelProxy._default;
    export = ModelProxy;
}