/// <reference types="tv4" />
import { ModelProxy } from "./libs/proxy";
import { IEngine } from './models/engine';
import * as compose from './libs/compose';
import * as base from './engines/base';
import * as baseFactory from "./libs/base.factory";
import * as schemas from "./schemas/builder";
import * as methodtype from "./models/method";
import * as errors from "./libs/errors";
export declare const modelProxy: {
    Proxy: typeof ModelProxy.ModelProxy;
    engineFactory: baseFactory.ModelProxy.BaseFactory<IEngine>;
    Compose: typeof compose.ModelProxy.Compose;
    modelProxySchemaUtils: {
        proxyConfigSchema: tv4.JsonSchema;
        interfaceSchema: tv4.JsonSchema;
        JsonSchemaBuilder: typeof schemas.ModleProxySchema.JsonSchemaBuilder;
    };
    methods: typeof methodtype.MethodType;
    BaseEngine: typeof base.ModelProxyEngine.BaseEngine;
    BaseFactory: typeof baseFactory.ModelProxy.BaseFactory;
    errors: typeof errors;
};
