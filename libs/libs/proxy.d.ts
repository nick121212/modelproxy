import { IExeucte } from '../models/execute';
import { IEngine } from '../models/engine';
import { IInterfaceModel } from '../models/interface';
import { IProxyConfig } from "../models/proxy.config";
import * as interfaceFactory from "./interface.factory";
import * as compose from "./compose";
export declare namespace ModelProxy {
    class ModelProxy extends compose.ModelProxy.Compose<any> {
        private interfaces;
        private composes;
        constructor();
        addEngines(engines: {
            [id: string]: IEngine;
        }): ModelProxy;
        private initInterfaces(config, overrideInterfaceConfig?);
        loadConfig(config: IProxyConfig, overrideInterfaceConfig?: IInterfaceModel): Promise<this>;
        execute(path: string, options: IExeucte): Promise<any>;
        getHost(path: string, instance: IInterfaceModel): string;
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory;
    }
}
