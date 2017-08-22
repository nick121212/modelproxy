import { IEngine } from "../models/engine";
import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";

export class DefaultEngine extends BaseEngine {
    constructor() {
        super();

        this.use((ctx: IProxyCtx, next: Function) => {
            next();

            return new Promise((resolve) => {
                resolve();
            });
        });
    }

    public async proxy(instance: IInterfaceModel, options: IExecute): Promise<any> {
        let fn = this.callback(() => {
            // console.log("al");
         });
        let res: IProxyCtx = await fn({
            executeInfo: options,
            instance: instance
        });

        if (res.isError) {
            throw res.err;
        }
        // console.log("执行接口成功！接口的路径：", this.getFullPath(instance, options), instance.method);

        return instance;
    }
}
