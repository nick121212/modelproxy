import { BaseEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import { IExecute } from "modelproxy/out/models/execute";
export declare class SuperAgentEngine extends BaseEngine<IProxyCtx> {
    engineName: string;
    /**
     * 构造
     */
    constructor();
    /**
     * 初始化中间件
     */
    init(): void;
    /**
     * 调用接口
     * @param instance 接口的实例
     * @param options  参数
     */
    proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
}
