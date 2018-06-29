import { IEngine } from "../models/engine";
import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";

/**
 * 默认的engine
 * 返回接口的实例
 */
export class DefaultEngine extends BaseEngine<IProxyCtx> {
    constructor() {
        super();

        this.use(async (ctx: IProxyCtx, next: Function) => {
            // console.log((ctx.instance as any).title, (ctx.instance as any).method,
            //     this.getFullPath(ctx.instance as any, ctx.executeInfo as any));

            await next("");
        });
    }

    /**
     * 调用接口，这里触发一次中间件方法
     * @param   {IInterfaceModel}  instance     接口的实例
     * @param   {IExecute}         options      接口的调用参数
     * @param   {any[]}            otherOptions 额外的接口参数
     * @returns {Promise<any>}
     */
    public async proxy(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any> {
        const res: IProxyCtx = await this.callback()({
            executeInfo: options,
            instance: instance,
            ...otherOptions
        });

        if (res.isError) {
            throw res.err;
        }

        return instance;
        // return this.getFullPath(instance, options);
    }
}
