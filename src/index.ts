import * as engineFactory from './libs/engine.factory';
import { ModelProxy } from "./libs/proxy";
import { IEngine } from './models/engine';
import * as compose from './libs/compose';
import modelProxySchemaUtils from './schemas/index';
import * as base from './engines/base';

import * as baseFactory from "./libs/base.factory";
import * as schemas from "./schemas/builder";
import * as methodtype from "./models/method";

export const modelProxy = {
    Proxy: ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: modelProxySchemaUtils,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine
};