import { IExeucte } from '../models/execute';
import { IEngine } from '../models/engine';
import { IInterfaceModel } from '../models/interface';
import { IProxyConfig } from "../models/proxy.config";
import * as interfaceFactory from "./interface.factory";
import * as engineFactory from "./engine.factory";
import * as composeFactory from "./compose.factory";
import schemas from "../schemas/index";
import * as compose from "./compose";
import { ModelProxyMissingError } from './errors';

export namespace ModelProxy {
    export class ComposeProxy extends compose.ModelProxy.Compose<any> {
        private composes: { [id: string]: composeFactory.ModelProxy.ComposeFactory; } = {};

        constructor() {
            super();
        }

        
    }
}