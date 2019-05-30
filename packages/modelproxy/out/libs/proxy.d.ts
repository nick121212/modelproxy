import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { Compose } from "./compose";
export declare type NormalExecuteInfo = {
    ns?: string;
    key?: string;
    options?: IExecute<any, any>;
    otherOptions?: any[];
};
export declare class ModelProxy extends Compose<any> {
    private defaultExecuteInfo;
    private nsFactory;
    forEach: any;
    constructor(defaultExecuteInfo?: IExecute<any, any> | undefined);
    addEngines(engines: {
        [id: string]: IEngine<any>;
    }): ModelProxy;
    loadConfig(config: IProxyConfig, overrideInterfaceConfig?: IInterfaceModelCommon<any>): ModelProxy;
    execute<D, P>(ns: string, key: string, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    executeAll(inters: {
        [key: string]: () => Promise<any>;
    }): Promise<any>;
    race(inters: Array<NormalExecuteInfo | Promise<any>>): Promise<any>;
    hasNs(ns: string): boolean;
    getNs(ns: string): InterfaceFactory<any, any, any, any>;
    getInterface(ns: string, key: string): IInterfaceModel<any, any, any, any>;
    mixin(ns: string, ...keys: string[]): ((...ids: any[]) => IInterfaceModel<any, any, any, any>) | null;
    private initInterfaces(ifFactory, config, overrideInterfaceConfig?);
}
