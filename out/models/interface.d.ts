import { MethodType } from "./method";
import { ICommon } from "./common";
import { IExecute } from "./execute";
export interface IInterfaceModelCommon extends ICommon {
    ns?: string;
    method?: MethodType | string;
    path?: string;
    config?: Object;
}
export interface IInterfaceModel extends IInterfaceModelCommon {
    execute(options: IExecute): Promise<any>;
    getPath(extendInstance?: IInterfaceModel): string;
    get(id?: string | number | null, options?: IExecute): Promise<any>;
    post(options?: IExecute): Promise<any>;
    delete(id?: string | number | null, options?: IExecute): Promise<any>;
    put(id?: string | number | null, options?: IExecute): Promise<any>;
}
