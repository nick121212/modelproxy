declare module 'modelproxy' {
    export namespace ModelProxySchema {
        abstract class BaseTypeBuilder {
            protected data: tv4.JsonSchema;
            constructor();
            build(type?: any, title?: string, description?: string): BaseTypeBuilder;
            properties(props: {
                [key: string]: tv4.JsonSchema;
            }): JsonSchemaBuilder;
            items(items: tv4.JsonSchema | tv4.JsonSchema[]): JsonSchemaBuilder;
            schema(schema?: string, id?: string): BaseTypeBuilder;
            required(...keys: any[]): this;
            toValue(): tv4.JsonSchema;
        }
        export class JsonSchemaBuilder extends BaseTypeBuilder {
            constructor();
            static init(): JsonSchemaBuilder;
        }

        export interface _default {
            proxyConfigSchema: tv4.JsonSchema;
            interfaceSchema: tv4.JsonSchema;
            JsonSchemaBuilder: typeof JsonSchemaBuilder;
        }
    }
    export namespace ModelProxyEngine {
        export abstract class BaseEngine extends ModelProxy.Compose<ModelProxy.IProxyCtx> implements ModelProxy.IEngine {
            constructor();
            getStatePath(instance: ModelProxy.IInterfaceModel): string;
            protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean;
            validate(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): boolean;
            proxy(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): Promise<any>;
            replacePath(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): string;
            getFullPath(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): string;
        }
        export class DefaultEngine extends BaseEngine {
            constructor();
            validate(intance: ModelProxy.IInterfaceModel, options: ModelProxy.IExecute): boolean;
            proxy(intance: ModelProxy.IInterfaceModel, options: ModelProxy.IExecute): Promise<any>;
        }
    }
    export namespace ModelProxy {
        export interface IProxyCtx {
            instance: IInterfaceModel;
            executeInfo: IExecute,
            isError?: boolean;
            err?: Error;
            result?: any;
        }
        export interface IExeucte {
            instance?: IInterfaceModel;
            data?: any;
            params?: any;
            settings?: any;
        }
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
            method?: MethodType;
            path?: string;
            config?: Object;
            dataSchema?: tv4.JsonSchema;
            paramsSchema?: tv4.JsonSchema;
        }
        export interface ICommon {
            key?: string;
            title?: string;
            engine?: string;
            states?: { [id: string]: string; };
            state?: string;
            version?: string;
            mockDir?: string;
        }
        export interface IExecute {
            instance?: IInterfaceModel;
            data?: any;
            params?: any;
            settings?: any;
        }
        export interface IProxyConfig extends ICommon {
            interfaces: Array<IInterfaceModel>;
        }
        export interface IEngine {
            validate(intance: IInterfaceModel, options: IExecute): boolean;
            proxy(intance: IInterfaceModel, options: IExecute): Promise<any>;
        }
        export class BaseFactory<T> {
            protected intances: {
                [id: string]: T;
            };
            constructor();
            get(name: string): T;
            add(name: string, intance: T, override?: boolean): void;
            use(name: string): T;
        }
        export class Compose<T extends IProxyCtx> {
            private middlewares;
            constructor();
            use(func: Function): void;
            clear(): void;
            compose(): Function;
            errorHandle(ctx: T, err: Error): void;
            callback(complete: Function): Function;
        }
        export class InterfaceFactory extends BaseFactory<IInterfaceModel> {
            constructor();
            add(name: string, intance: IInterfaceModel, override?: boolean): void;
            execute(intance: IInterfaceModel, options: IExecute): Promise<any>;
            private validate(obj: JSON, schema: tv4.JsonSchema): void;
        }
        export class ModelProxy extends Compose<any> {
            private interfaces;
            constructor();
            private initInterfaces(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModel);
            loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModel): Promise<this>;
            getNs(ns: string): InterfaceFactory;
            getHost(path: string, instance?: IInterfaceModel): string;
            addEngines(engines: { [id: string]: IEngine; }): ModelProxy;
            execute(path: string, options: IExecute): Promise<any>;
        }
        export class BaseError implements Error {
            public name: string;
            public message: string;
            constructor(message?: string);
        }
        export class ModelProxyValidaterError extends BaseError {
            error: Array<any> | any;
            missing: Array<any>;
            constructor(message: string, error: Array<any> | any, missing?: Array<any>);
        }

        export class ModelProxyMissingError extends BaseError {
            constructor(message: string);
        }

        export interface errors {
            ModelProxyMissingError: typeof ModelProxyMissingError;
            ModelProxyValidaterError: typeof ModelProxyValidaterError;
        }

        export interface _default {
            Proxy: typeof ModelProxy;
            engineFactory: BaseFactory<IEngine>;
            Compose: typeof Compose;
            modelProxySchemaUtils: ModelProxySchema._default;
            methods: typeof MethodType;
            BaseEngine: typeof ModelProxyEngine.BaseEngine;
            BaseFactory: typeof BaseFactory;
            errors: errors;
        }
    }

    export var modelProxy: ModelProxy._default;
}