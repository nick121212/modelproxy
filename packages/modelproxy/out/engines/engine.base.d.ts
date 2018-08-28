import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine<T extends IProxyCtx> extends Compose<T> implements IEngine {
    validate(_instance: IInterfaceModel, _options: IExecute): Promise<boolean>;
    delay(interval: number): Promise<any>;
    proxy(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel): string;
    replacePath(instance: IInterfaceModel, {params, data}: IExecute): string;
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
}
