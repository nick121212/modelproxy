import "url-search-params-polyfill";
import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose, MiddleFunc } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine<T extends IProxyCtx> extends Compose<T> implements IEngine {
    protected beforeMiddlewares: MiddleFunc<IProxyCtx>[];
    protected afterMiddlewares: MiddleFunc<IProxyCtx>[];
    validate(_instance: IInterfaceModel, _options: IExecute): Promise<boolean>;
    proxy(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel): string;
    replacePath(instance: IInterfaceModel, {params, data}: IExecute): string;
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
}
