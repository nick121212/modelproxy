import { IInterfaceModel, IInterfaceModelCommon } from "./interface";

export interface IExecute {
    instance?: IInterfaceModelCommon;
    data?: any;
    params?: any;
    settings?: any;
    query?: boolean;
}
