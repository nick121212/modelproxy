import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { Compose } from "./compose";
export declare type NormalExecuteInfo = {
    ns?: string;
    key?: string;
    options?: IExecute;
};
export declare class ModelProxy extends Compose<any> {
    private interfaces;
    addEngines(engines: {
        [id: string]: IEngine;
    }): ModelProxy;
    loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon): ModelProxy;
    execute(ns: string, key: string, options?: IExecute): Promise<any>;
    executeAll(inters: {
        [key: string]: () => Promise<any>;
    }): Promise<any>;
    race(inters: Array<NormalExecuteInfo | Promise<any>>): Promise<any>;
    getNs(ns: string): InterfaceFactory;
    private initInterfaces(config, overrideInterfaceConfig?);
}
