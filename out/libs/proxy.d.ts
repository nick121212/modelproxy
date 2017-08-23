import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { Compose } from "./compose";
export declare class ModelProxy extends Compose<any> {
    private interfaces;
    constructor();
    addEngines(engines: {
        [id: string]: IEngine;
    }): ModelProxy;
    loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon): Promise<this>;
    execute(ns: string, key: string, options?: IExecute): Promise<any>;
    getNs(ns: string): InterfaceFactory;
    private initInterfaces(config, overrideInterfaceConfig?);
}
