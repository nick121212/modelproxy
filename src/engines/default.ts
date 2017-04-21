import { IEngine } from "../models/engine";
import { IInterfaceModel } from '../models/interface';
import * as base from './base';
import { IExeucte } from '../models/execute';

export namespace ModelProxyEngine {
    export class DefaultEngine extends base.ModelProxyEngine.BaseEngine {
        constructor() {
            super();

            this.use((ctx, next) => {
                next();

                return new Promise((resolve) => {
                    resolve();
                });
            });
        }

        async proxy(instance: IInterfaceModel, options: IExeucte): Promise<any> {
            var fn = this.callback(() => { });

            await fn({});

            console.log("接口的路径：", this.getFullPath(instance, options));

            return {};
        }
    }
}
