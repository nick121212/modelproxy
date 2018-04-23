import "url-search-params-polyfill";
import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine extends Compose<IProxyCtx> implements IEngine {
    constructor();
    validate(instance: IInterfaceModel, options: IExecute): Promise<boolean>;
    proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
    getStatePath(instance: IInterfaceModel): string;
    replacePath(instance: IInterfaceModel, {params, data}: IExecute): string;
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
}
