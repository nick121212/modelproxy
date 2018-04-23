import { IEngine } from "../models/engine";
import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";

/**
 * 默认的engine
 * 返回接口的实例
 */
export class DefaultEngine extends BaseEngine {
    constructor() {
        super();

        this.use((ctx: IProxyCtx, next: Function) => {
            next();
            console.log("调用地址：", (ctx.instance as any).method, this.getFullPath(ctx.instance as any, ctx.executeInfo as any));
            return new Promise((resolve) => {
                resolve();
            });
        });
    }

    // public async validate(instance: IInterfaceModel, options: IExecute): Promise<boolean> {
    //     // if(options.params.tag==="nick"){
    //     //     throw new Error("nick is not allowed!");
    //     // }

    //     return true;
    // }

    /**
     * 调用接口，这里触发一次中间件方法
     * @param instance 接口的实例
     * @param options  接口的调用参数
     * @returns {Promise<any>}
     */
    public async proxy(instance: IInterfaceModel, options: IExecute): Promise<any> {
        let fn = this.callback();
        let res: IProxyCtx = await fn({
            executeInfo: options,
            instance: instance
        });

        if (res.isError) {
            throw res.err;
        }

        return instance;
        // return this.getFullPath(instance, options);
    }
}
