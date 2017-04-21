import { IInterfaceModel } from "../models/interface";
import * as factory from "./base.factory";
import { IExeucte } from '../models/execute';
export declare namespace ModelProxy {
    class InterfaceFactory extends factory.ModelProxy.BaseFactory<IInterfaceModel> {
        constructor();
        add(name: string, instance: IInterfaceModel, override?: boolean): void;
        private megreInstance(instance, extendInstance);
        private getPath(instance, extendInstance);
        execute(instance: IInterfaceModel, options: IExeucte): Promise<any>;
    }
}
