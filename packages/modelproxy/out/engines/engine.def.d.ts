import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";
export declare class DefaultEngine<T extends IProxyCtx, T1> extends BaseEngine<T, T1> {
    doProxy(instance: IInterfaceModel<any>, executeInfo: IExecute, ...otherOptions: any[]): Promise<any>;
    proxy(instance: IInterfaceModel<any>, executeInfo: IExecute, ...otherOptions: any[]): Promise<any>;
}
