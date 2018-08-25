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
    defaultExecuteInfo?: IExecute;
    execute(options: IExecute, ...otherOptions: any[]): Promise<any>;
    getPath(extendInterface?: IInterfaceModelCommon): string;
    getFullPath(options?: IExecute): string;
    replacePath(options?: IExecute): string;
    get(options?: IExecute, ...otherOptions: any[]): Promise<any>;
    getOne(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    post(options?: IExecute, ...otherOptions: any[]): Promise<any>;
    delete(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    put(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
}
