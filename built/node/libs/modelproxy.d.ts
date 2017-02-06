import * as interfaceFactory from "./interface.factory";
import { IProxyConfig } from "../models/proxy.config";
import * as compose from "./compose";
export declare namespace ModelProxy {
    class ModelProxy extends compose.ModelProxy.Compose {
        private interfaces;
        constructor();
        private initInterfaces(config);
        loadConfig(config: IProxyConfig): Promise<this>;
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory;
    }
}
