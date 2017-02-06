import * as engineFactory from './libs/engine.factory';
import { ModelProxy } from "./libs/modelproxy";
import { IEngine } from './models/engine';
import * as compose from './libs/compose';
import modelProxySchemaUtils from './schemas';

import * as baseFactory from "./libs/base.factory";
import * as schemas from "./schemas/builder";
import * as methodtype from "./models/method";

export default {
    ModelProxy: ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: modelProxySchemaUtils
};

export const methods = methodtype.MethodType;