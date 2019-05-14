import { DefaultEngine } from "modelproxy";
import { IExecute } from "modelproxy/out/models/execute";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
export declare type FetchFunction = (url: string, method: string, data: any, ctx: IProxyCtx<any, any>) => Promise<any>;
export declare class BaseEngine<T> extends DefaultEngine<T, any, any, any> {
    private fetchFunc;
    /**
     * Creates an instance of MiniGEngine.
     * @param {FetchFunction} fetchFunc
     * @memberof MiniGEngine
     */
    constructor(fetchFunc: FetchFunction);
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx: IProxyCtx<any, any>, next: (s?: string) => void): Promise<void>;
    /**
     * 发起调用，接口方法
     * @param   {IInterfaceModel} instance      当前接口的实例
     * @param   {IExecute}        executeInfo   调用参数
     * @param   {any[]}           otherOptions  额外的参数
     * @returns {Promise<any>}
     */
    proxy(instance: IInterfaceModel<any, any, any, any>, executeInfo: IExecute<any, any>, ...otherOptions: any[]): Promise<any>;
}
