import { IEngine } from '../models/engine';
import { IInterfaceModel } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import * as interfaceFactory from "./interface.factory";
import * as engineFactory from "./engine.factory";
import schemas from "../schemas/index";
import * as compose from "./compose";
import * as tv4 from "tv4";
import * as _ from "lodash";

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
        addEngines(engines: { [id: string]: IEngine; }): void {
            _.each(engines, (val, key) => {
                engineFactory.ModelProxy.engineFactory.add(key, val, true);
            });
        }

        /**
         * 初始化配置文件中的接口信息
         * @param config {IProxyConfig} 配置信息
         * @return {InterfaceFactory}
         */
        private initInterfaces(config: IProxyConfig): interfaceFactory.ModelProxy.InterfaceFactory {
            let ifFacory = new interfaceFactory.ModelProxy.InterfaceFactory();

            _.each(config.interfaces, (i: IInterfaceModel) => {
                ifFacory.add(i.key, _.extend({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i) as IInterfaceModel);
            });

            return ifFacory;
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
         * 获取namespace
         * @param ns    {string} 空间名
         * @return { InterfaceFactory }
         */
        getNs(ns: string): interfaceFactory.ModelProxy.InterfaceFactory {
            if (!this.interfaces.hasOwnProperty(ns)) {
                let nses = _.map(this.interfaces, (val, key) => {
                    return key;
                });

                throw new Error(`没有找到${ns}空间;当前命名空间【${nses.join(',')}】`);
            }

            return this.interfaces[ns];
        }
    }
}