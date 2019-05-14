import { DefaultEngine, MPError } from "modelproxy";
import { IExecute } from "modelproxy/out/models/execute";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";

export type FetchFunction = (url: string, method: string, data: any, ctx: IProxyCtx<any, any>) => Promise<any>;

export class BaseEngine<T> extends DefaultEngine<T, any, any, any> {
    /**
	 * Creates an instance of MiniGEngine.
	 * @param {FetchFunction} fetchFunc
	 * @memberof MiniGEngine
	 */
    constructor(private fetchFunc: FetchFunction) {
        super();
    }

    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    public async fetch(ctx: IProxyCtx<any, any>, next: (s?: string) => void) {
        const { instance = {}, executeInfo = {}, settings = {} } = ctx;
        const { method } = instance;
        const url = this.getFullPath(instance as any, executeInfo);
        const { timeout } = settings;
        const { data } = executeInfo;

        // 使用超时设置
        ctx.result = await Promise.race([
            this.delay(timeout || 5000).then(() => {
                throw new MPError(`接口请求超时！(${timeout})`, "timeout", ctx);
            }),
            this.fetchFunc(url, method as any, data, ctx)
        ]);

        await next();
    }

    /**
     * 发起调用，接口方法
     * @param   {IInterfaceModel} instance      当前接口的实例
     * @param   {IExecute}        executeInfo   调用参数
     * @param   {any[]}           otherOptions  额外的参数
     * @returns {Promise<any>}
     */
    public async proxy(instance: IInterfaceModel<any, any, any, any>, executeInfo: IExecute<any, any>, ...otherOptions: any[]) {
        const { result } = await this.doProxy(instance, executeInfo, ...otherOptions);

        return result;
    }
}
