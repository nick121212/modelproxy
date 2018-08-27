import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { Compose } from "./compose";
export declare type NormalExecuteInfo = {
    ns?: string;
    key?: string;
    options?: IExecute;
    otherOptions?: any[];
};
export declare class ModelProxy extends Compose<any> {
    private defaultExecuteInfo;
    private nsFactory;
    forEach: any;
    constructor(defaultExecuteInfo?: IExecute | undefined);
    addEngines(engines: {
        [id: string]: IEngine;
    }): ModelProxy;
    loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon): ModelProxy;
    execute(ns: string, key: string, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    executeAll(inters: {
        [key: string]: () => Promise<any>;
    }): Promise<any>;
    race(inters: Array<NormalExecuteInfo | Promise<any>>): Promise<any>;
    hasNs(ns: string): boolean;
    getNs(ns: string): InterfaceFactory;
    minix(ns: string, ...keys: string[]): ((...ids: any[]) => IInterfaceModel) | null;
    mixin(ns: string, ...keys: string[]): ((...ids: any[]) => IInterfaceModel) | null;
    private initInterfaces(ifFactory, config, overrideInterfaceConfig?);
}
