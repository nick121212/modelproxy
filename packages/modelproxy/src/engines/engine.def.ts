import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";
import { Compose } from "../libs/compose";

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
    public async proxy(instance: IInterfaceModel, executeInfo: IExecute, ...otherOptions: any[]): Promise<any> {
        const c = new Compose<IProxyCtx>();
        const { before, after } = executeInfo;

        if (before) {
            c.merge(before);
        }
        c.merge(this);
        if (after) {
            c.merge(after);
        }
        const ctx = await c.callback()({
            executeInfo,
            instance,
            ...otherOptions
        });

        if (ctx.isError) {
            throw ctx.err;
        }

        return ctx;
    }
}
