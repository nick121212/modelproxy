import { engineFactory } from "./libs/engine.factory";
import { ModelProxy } from "./libs/modelproxy";
import { IEngine } from './models/engine';
import { BaseFactory } from './libs/base.factory';

export default {
    ModelProxy: ModelProxy,
    engineFactory: engineFactory
};