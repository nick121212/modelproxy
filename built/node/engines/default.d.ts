import { IEngine } from "../models/engine";
import { IInterfaceModel } from '../models/interface';
import * as compose from '../libs/compose';
export declare namespace ModelProxyEngine {
    class DefaultEngine extends compose.ModelProxy.Compose implements IEngine {
        constructor();
        validate(data: any): boolean;
        proxy(intance: IInterfaceModel, data: any, params: any): Promise<any>;
    }
}
