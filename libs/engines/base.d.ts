/// <reference types="tv4" />
import * as tv4 from "tv4";
import { IEngine } from '../models/engine';
import { IExeucte } from '../models/execute';
import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxy.ctx';
import { IInterfaceModel } from '../models/interface';
export declare namespace ModelProxyEngine {
    abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> implements IEngine {
        constructor();
        protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean;
        validate(instance: IInterfaceModel, options: IExeucte): boolean;
        proxy(instance: IInterfaceModel, options: IExeucte): Promise<any>;
        getStatePath(instance: IInterfaceModel): string;
        replacePath(instance: IInterfaceModel, options: IExeucte): string;
        getFullPath(instance: IInterfaceModel, options: IExeucte): string;
    }
}
