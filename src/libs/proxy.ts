// import * as tv4 from "tv4";
import * as jsonPointer from "json-pointer";

import { IExecute } from '../models/execute';
import { IEngine } from '../models/engine';
import { IInterfaceModel } from '../models/interface';
import { IProxyConfig } from "../models/proxy.config";
import * as interfaceFactory from "./interface.factory";
import * as engineFactory from "./engine.factory";
import * as composeFactory from "./compose.factory";
import schemas from "../schemas/index";
import * as compose from "./compose";
import { ModelProxyMissingError } from './errors';

import * as cproxy from "./cproxy";

export namespace ModelProxy {
    export class ModelProxy extends compose.ModelProxy.Compose<any> {
        private interfaces: { [id: string]: interfaceFactory.ModelProxy.InterfaceFactory; } = {};
        // private cproxy: cproxy.ModelProxy.ComposeProxy = new cproxy.ModelProxy.ComposeProxy();
        private composes: { [id: string]: composeFactory.ModelProxy.ComposeFactory; } = {};

        constructor() {
            super();
        }

        /**
         * 添加engines
         * @param engines { { [id: string]: IEngine; } }  引擎对象
         */
        addEngines(engines: { [id: string]: IEngine; }): ModelProxy {
            for (let key in engines) {
                engineFactory.ModelProxy.engineFactory.add(key, engines[key], true);
            }

            return this;
        }

        // /**
        //  * 添加组合方法类
        //  * @param composes 一个组合类
        //  */
        // addCompose(composes: { [id: string]: compose.ModelProxy.Compose<any>; }) {
        //     for (let key in composes) {
        //         this.composes.
        //     }

        //     return this;
        // }

        /**
         * 初始化配置文件中的接口信息
         * @param config {IProxyConfig} 配置信息
         * @return {InterfaceFactory}
         */
        private initInterfaces(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModel = {}): interfaceFactory.ModelProxy.InterfaceFactory {
            let ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();

            config.interfaces.forEach((i: IInterfaceModel) => {
                ifFactory.add(i.key, Object.assign({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i, overrideInterfaceConfig || {}) as IInterfaceModel);
            });

            return ifFactory;
        }

        /** 
         * 导入配置
         * @param config {IProxyConfig} 配置信息
         * @return {InterfaceFactory}   
        */
        async loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModel = {}) {
            // let valid: tv4.SingleResult = tv4.validateResult(config, schemas.proxyConfigSchema as tv4.JsonSchema);

            // if (!valid.valid) {
            //     throw valid.error;
            // }

            this.interfaces[config.key] = this.initInterfaces(config, overrideInterfaceConfig);

            return this;
        }

        /**
         * 执行一个接口方法
         * @param path     {String}   执行的方法路径;格式：/${ns}/${key}；example: /localhost/login
         * @param options  {IExecute} 调用接口所需的data
         * @return {Promise<any>}
         */
        async execute(path: string, options: IExecute) {
            let interfaceInstance: Function = null;

            if (!jsonPointer.has(this.interfaces, path)) {
                throw new ModelProxyMissingError(`没有发现${path}的接口方法！`);
            }

            interfaceInstance = jsonPointer.get(this.interfaces, path);

            return interfaceInstance(options);
        }

        /**
         * 获取接口的host
         * @param {String}            path 
         * @param {IInterfaceModel}   instance 
         * @return {String}
         */
        getHost(path: string, instance?: IInterfaceModel): string {
            let interfaceInstance: Function = null;

            if (!jsonPointer.has(this.interfaces, path)) {
                throw new ModelProxyMissingError(`没有发现${path}的接口方法！`);
            }

            interfaceInstance = jsonPointer.get(this.interfaces, path);

            return interfaceInstance["getPath"](instance);
        }

        /**
         * 获取namespace
         * @param ns    {string} 空间名
         * @return { InterfaceFactory }
         */
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory {
            if (!this.interfaces.hasOwnProperty(ns)) {
                let nses = [];

                for (let key in this.interfaces) {
                    nses.push(key);
                }
                // let nses = _.map(this.interfaces, (val, key) => {
                //     return key;
                // });

                throw new ModelProxyMissingError(`没有找到${ns}空间;当前命名空间【${nses.join(',')}】`);
            }

            return this.interfaces[ns];
        }
    }
}