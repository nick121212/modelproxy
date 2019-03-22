import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";
import { Compose } from "../libs/compose";

/**
 * 默认的engine
 * 返回接口的实例
 */
export class DefaultEngine<T extends IProxyCtx> extends BaseEngine<T> {
    /**
   * 调用接口，这里触发一次中间件方法
   * @param   {IInterfaceModel}  instance     接口的实例
   * @param   {IExecute}         options      接口的调用参数
   * @param   {any[]}            otherOptions 额外的接口参数
   * @return  {Promise<any>}
   */
    public async doProxy(instance: IInterfaceModel, executeInfo: IExecute, ...otherOptions: any[]): Promise<any> {
        const c = new Compose<IProxyCtx>();
        const { before, after, error, beforeProxy, afterProxy } = executeInfo;

        // 判斷是否需要在前面加入compose
        if (before) {
            c.merge(before);
        }

        // 合併當前的compose
        c.merge(this as any);

        // 判斷是否需要在後面加入compose
        if (after) {
            c.merge(after);
        }

        let ctx = Object.assign({}, ...otherOptions, {
            executeInfo,
            instance
        });

        if (beforeProxy) {
            beforeProxy(ctx);
        }

        // 執行當前的中間件
        ctx = await c.callback()(
            Object.assign({}, ...otherOptions, {
                executeInfo,
                instance
            })
        );

        if (afterProxy) {
            afterProxy(ctx);
        }

        // 錯誤處理，如果有錯誤，則調用錯誤處理中間件
        if (ctx.isError) {
            const err = ctx.err;

            if (error) {
                ctx = await error.callback()(ctx);
            }

            if (ctx.isError) {
                throw err || ctx.err;
            }
        }

        return ctx;
    }

    /**
   * 调用接口，这里触发一次中间件方法
   * @param   {IInterfaceModel}  instance     接口的实例
   * @param   {IExecute}         options      接口的调用参数
   * @param   {any[]}            otherOptions 额外的接口参数
   * @return  {Promise<any>}
   */
    public async proxy(instance: IInterfaceModel, executeInfo: IExecute, ...otherOptions: any[]): Promise<any> {
        return this.doProxy(instance, executeInfo, ...otherOptions);
    }
}
