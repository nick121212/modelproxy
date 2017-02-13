import { IEngine } from "../models/engine";
import { IInterfaceModel } from '../models/interface';
import * as base from './base';
import { IExeucte } from '../models/execute';

export namespace ModelProxyEngine {
    export class DefaultEngine extends base.ModelProxyEngine.BaseEngine {
        constructor() {
            super();
        }

        // validate(instance: IInterfaceModel, options: IExeucte): boolean {
        //     return true;
        // }

        async proxy(instance: IInterfaceModel, options: IExeucte): Promise<any> {
            if (!this.validate(instance, options)) {
                return null;
            }

            return instance;
        }
    }
}
