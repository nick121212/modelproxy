declare module 'modelproxy' {

    export namespace ModelProxySchema {
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
        export class JsonSchemaBuilder extends BaseTypeBuilder {
            constructor();
            static init(): JsonSchemaBuilder;
        }

        export interface _default {
            proxyConfigSchema: JsonSchema;
            interfaceSchema: JsonSchema;
            JsonSchemaBuilder: JsonSchemaBuilder;
        }
    }
    export namespace ModelProxyEngine {
        export class DefaultEngine extends ModelProxy.Compose implements ModelProxy.IEngine {
            constructor();
            validate(data: any): boolean;
            proxy(intance: ModelProxy.IInterfaceModel, data: any, params: any): Promise<any>;
        }
    }
    export namespace ModelProxy {
        export enum MethodType {
            GET,
            POST,
            DELETE,
            PUT,
            HEAD,
            PATCH,
            OPTIONS
        }
        export interface IInterfaceModel extends ICommon {
            ns?: string;
            method: MethodType;
            path: string;
            config?: Object;
        }
        export interface ICommon {
            key: string;
            title: string;
            engine?: string;
            states?: { [id: string]: string; };
            state?: string;
            version?: string;
            mockDir?: string;
        }
        export interface IProxyConfig extends ICommon {
            interfaces: Array<IInterfaceModel>;
        }
        export interface IEngine {
            validate(data: any): boolean;
            proxy(intance: IInterfaceModel, data: any, params: any): any;
        }
        export class BaseFactory<T> {
            protected intances: {
                [id: string]: T;
            };
            constructor();
            add(name: string, intance: T, override?: boolean): void;
            use(name: string): T;
        }
        export class Compose {
            private middlewares;
            constructor();
            use(func: Function): void;
            compose(): Function;
            errorHandle(ctx: any, err: Error): void;
            callback(complete: Function): Function;
        }
        export class InterfaceFactory extends BaseFactory<IInterfaceModel> {
            constructor();
            add(name: string, intance: IInterfaceModel, override?: boolean): void;
            execute(intance: IInterfaceModel, data: any, params: any, intanceCover: IInterfaceModel): Promise<any>;
        }
        export class ModelProxy extends Compose {
            private interfaces;
            constructor();
            private initInterfaces(config: IProxyConfig);
            loadConfig(config: IProxyConfig): Promise<this>;
            getNs(ns: string): InterfaceFactory;
        }

        export interface _default {
            ModelProxy: ModelProxy;
            engineFactory: BaseFactory<IEngine>;
            Compose: Compose;
            modelProxySchemaUtils: ModelProxySchema._default;
            methods: typeof MethodType;
        }
    }
    var modelproxy: ModelProxy._default;

    export default modelproxy;
}