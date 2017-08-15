import { IExecute } from '../models/execute';
import { IEngine } from '../models/engine';
import { IInterfaceModelCommon } from '../models/interface';
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { Compose } from "./compose";
export declare class ModelProxy extends Compose<any> {
    private interfaces;
    constructor();
    /**
     * 添加engines
     * @param engines { { [id: string]: IEngine; } }  引擎对象
     */
    addEngines(engines: {
        [id: string]: IEngine;
    }): ModelProxy;
    /**
     * 初始化配置文件中的接口信息
     * @param config {IProxyConfig} 配置信息
     * @return {InterfaceFactory}
     */
    private initInterfaces(config, overrideInterfaceConfig?);
    /**
     * 导入配置
     * @param config {IProxyConfig} 配置信息
     * @return {InterfaceFactory}
    */
    loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon): Promise<this>;
    /**
     * 执行一个接口方法
     * @param path     {String}   执行的方法路径;格式：/${ns}/${key}；example: /localhost/login
     * @param options  {IExecute} 调用接口所需的data
     * @return {Promise<any>}
     */
    execute(ns: string, key: string, options?: IExecute): Promise<any>;
    /**
     * 获取namespace
     * @param ns    {string} 空间名
     * @return { InterfaceFactory }
     */
    getNs(ns: string): InterfaceFactory;
}
