import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine<T extends IProxyCtx, T1> extends Compose<T> implements IEngine<T1> {
    validate(_instance: IInterfaceModel<any>, _options: IExecute): Promise<boolean>;
    delay(interval: number): Promise<any>;
    proxy(instance: IInterfaceModel<any>, options: IExecute, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel<any>): string;
    replacePath(instance: IInterfaceModel<any>, {params, data}: IExecute): string;
    getFullPath(instance: IInterfaceModel<any>, options: IExecute): string;
}
