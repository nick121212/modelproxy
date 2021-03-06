import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";
export declare class DefaultEngine<T extends IProxyCtx<D, P>, D, P, C> extends BaseEngine<T, D, P, C> {
    doProxy<R>(instance: IInterfaceModel<R, D, P, C>, executeInfo: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    proxy<R>(instance: IInterfaceModel<R, D, P, C>, executeInfo: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
}
