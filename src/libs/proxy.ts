import { IExeucte } from '../models/execute';
import { IEngine } from '../models/engine';
import { IInterfaceModel } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import * as interfaceFactory from "./interface.factory";
import * as engineFactory from "./engine.factory";
import schemas from "../schemas/index";
import * as compose from "./compose";
import * as tv4 from "tv4";
import * as _ from "lodash";
import * as jsonPointer from "json-pointer";
import { ModelProxyMissingError } from './errors';

export namespace ModelProxy {
    export class ModelProxy extends compose.ModelProxy.Compose<any> {
        private interfaces: { [id: string]: interfaceFactory.ModelProxy.InterfaceFactory; } = {};

        constructor() {
            super();
        }

        /**
         * 添加engines
         * @param engines { { [id: string]: IEngine; } }  引擎对象
         */
        addEngines(engines: { [id: string]: IEngine; }): ModelProxy {
            _.each(engines, (val, key) => {
                engineFactory.ModelProxy.engineFactory.add(key, val, true);
            });

            return this;
        }

        /**
         * 初始化配置文件中的接口信息
         * @param config {IProxyConfig} 配置信息
         * @return {InterfaceFactory}
         */
        private initInterfaces(config: IProxyConfig): interfaceFactory.ModelProxy.InterfaceFactory {
            let ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();

            _.each(config.interfaces, (i: IInterfaceModel) => {
                ifFactory.add(i.key, _.extend({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i) as IInterfaceModel);
            });

            return ifFactory;
        }

        /** 
         * 导入配置
         * @param config {IProxyConfig} 配置信息
         * @return {InterfaceFactory}   
        */
        async loadConfig(config: IProxyConfig) {
            let valid: tv4.SingleResult = tv4.validateResult(config, schemas.proxyConfigSchema as tv4.JsonSchema);

            if (!valid.valid) {
                throw valid.error;
            }

            this.interfaces[config.key] = this.initInterfaces(config);

            return this;
        }

        /**
         * 执行一个接口方法
         * @param path     {String}   执行的方法路径;格式：/${ns}/${key}；example: /localhost/login
         * @param options  {IExecute} 调用接口所需的data
         * @return {Promise<any>}
         */
        async execute(path: string, options: IExeucte) {
            let interfaceInstance: Function = null;

            if (!jsonPointer.has(this.interfaces, path)) {
                throw new ModelProxyMissingError(`没有发现${path}的接口方法！`);
            }

            interfaceInstance = jsonPointer.get(this.interfaces, path);

            if (!_.isFunction(interfaceInstance)) {
                throw new TypeError(`${path}不是一个方法！`);
            }

            return interfaceInstance(options);
        }

        /**
         * 获取namespace
         * @param ns    {string} 空间名
         * @return { InterfaceFactory }
         */
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory {
            if (!this.interfaces.hasOwnProperty(ns)) {
                let nses = _.map(this.interfaces, (val, key) => {
                    return key;
                });

                throw new ModelProxyMissingError(`没有找到${ns}空间;当前命名空间【${nses.join(',')}】`);
            }

            return this.interfaces[ns];
        }
    }
}