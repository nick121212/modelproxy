import { IInterfaceModel } from "../models/interface";
import * as interfaceFactory from "./interface.factory";
import { IProxyConfig } from "../models/proxy.config";
import schemas from "../schemas";
import * as compose from "./compose";
import * as Bluebird from "bluebird";
import * as tv4 from "tv4";
import * as _ from "lodash";

export namespace ModelProxy {
    export class ModelProxy extends compose.ModelProxy.Compose {
        private interfaces: { [id: string]: interfaceFactory.ModelProxy.InterfaceFactory; } = {};

        constructor() {
            super();
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
                }, i));
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

        getNs(ns: string) {
            if (!this.interfaces.hasOwnProperty(ns)) {
                throw new Error(`没有找到${ns}空间`);
            }

            return this.interfaces[ns];
        }
    }
}