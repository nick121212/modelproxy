import { IProxyCtx } from "../models/proxyctx";
export declare namespace ModelProxy {
    /**
     * koa中间件方法
     */
    class Compose<T extends IProxyCtx> {
        private middlewares;
        constructor();
        /**
         * 添加中间件函数
         * @param func    {Function} 中间件方法
         * @return        {void}
         */
        use(func: Function): void;
        /**
         * 清除中间件方法
         */
        clear(): void;
        /**
         * 生成中间件执行函数
         * @return {Function}
         */
        compose(): Function;
        /**
         * 错误的判断
         * @param ctx   {Object} 执行上下文
         * @param err   {Object} 错误数据
         */
        errorHandle(ctx: T, err: Error): void;
        /**
         * 包装compose函数
         * @param complete {Function} 执行完毕后回调函数
         * @return  {Function}
         */
        callback(complete: Function): Function;
    }
}
