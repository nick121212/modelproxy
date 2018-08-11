import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";
export declare class DefaultEngine extends BaseEngine<IProxyCtx> {
    constructor();
    proxy(instance: IInterfaceModel, executeInfo: IExecute, ...otherOptions: any[]): Promise<any>;
}
