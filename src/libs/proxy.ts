import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { engineFactory } from "./engine.factory";
import { ComposeFactory } from "./compose.factory";
import { Compose } from "./compose";
import { ModelProxyMissingError } from "./errors";

import * as cproxy from "./cproxy";

export class ModelProxy extends Compose<any> {
    private interfaces: { [id: string]: InterfaceFactory; } = {};
    // private cproxy: cproxy.ModelProxy.ComposeProxy = new cproxy.ModelProxy.ComposeProxy();
    // private composes: { [id: string]: ComposeFactory; } = {};

    constructor() {
        super();
    }

    /**
     * 添加engines
     * @param engines { { [id: string]: IEngine; } }  引擎对象
     */
    public addEngines(engines: { [id: string]: IEngine; }): ModelProxy {
        for (let key in engines) {
            if (engines.hasOwnProperty(key)) {
                let element = engines[key];
                engineFactory.add(key, element, true);
            }
        }

        return this;
    }
    /**
     * 导入配置
     * @param config {IProxyConfig} 配置信息
     * @return        当前实例
    */
    public async loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon) {
        this.interfaces[config.key as string] = this.initInterfaces(config, overrideInterfaceConfig);

        return this;
    }

    /**
     * 执行一个接口方法
     * @param path     {String}   执行的方法路径;格式：/${ns}/${key}；example: /localhost/login
     * @param options  {IExecute} 调用接口所需的data
     * @return {Promise<any>}
     */
    public async execute(ns: string, key: string, options: IExecute = {}) {
        let interfaces = this.getNs(ns);
        let instance = interfaces.get(key);

        if (!instance) {
            throw new ModelProxyMissingError(`没有发现/${ns}/${key}的接口方法！`);
        }

        return instance.execute(options);
    }

    /**
     * 获取namespace
     * @param ns    {string} 空间名
     * @return { InterfaceFactory }
     */
    public getNs(ns: string): InterfaceFactory {
        if (!this.interfaces.hasOwnProperty(ns)) {
            let nses = [];

            for (let key in this.interfaces) {
                if (this.interfaces.hasOwnProperty(key)) {
                    let element = this.interfaces[key];
                    nses.push(key);
                }
            }

            throw new ModelProxyMissingError(`没有找到${ns}空间;当前命名空间【${nses.join(",")}】`);
        }

        return this.interfaces[ns];
    }

    /**
     * 初始化配置文件中的接口信息
     * @param config {IProxyConfig} 配置信息
     * @return {InterfaceFactory}
     */
    private initInterfaces(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon = {}): InterfaceFactory {
        let ifFactory = new InterfaceFactory();

        config.interfaces.forEach((i: IInterfaceModelCommon) => {
            ifFactory.add(i.key as string, Object.assign({}, {
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states,
            }, i, overrideInterfaceConfig || {}) as IInterfaceModel);
        });

        return ifFactory;
    }
}
