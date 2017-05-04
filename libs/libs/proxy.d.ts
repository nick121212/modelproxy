import { IExecute } from '../models/execute';
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
        loadConfig(config: IProxyConfig, overrideInterfaceConfig?: IInterfaceModel): Promise<this>;
        /**
         * 执行一个接口方法
         * @param path     {String}   执行的方法路径;格式：/${ns}/${key}；example: /localhost/login
         * @param options  {IExecute} 调用接口所需的data
         * @return {Promise<any>}
         */
        execute(path: string, options: IExecute): Promise<any>;
        /**
         * 获取接口的host
         * @param {String}            path
         * @param {IInterfaceModel}   instance
         * @return {String}
         */
        getHost(path: string, instance?: IInterfaceModel): string;
        /**
         * 获取namespace
         * @param ns    {string} 空间名
         * @return { InterfaceFactory }
         */
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory;
    }
}
