import { IInterfaceModel } from "../models/interface";
import * as factory from "./base.factory";
export declare namespace ModelProxy {
    class InterfaceFactory extends factory.ModelProxy.BaseFactory<IInterfaceModel> {
        constructor();
        add(name: string, intance: IInterfaceModel, override?: boolean): void;
        execute(intance: IInterfaceModel, data: any, params: any, intanceCover: IInterfaceModel): Promise<any>;
    }
}
