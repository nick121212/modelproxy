import { MethodType } from "./method";
import { ICommon } from "./common";
import { IExecute } from "./execute";
export interface IInterfaceModelCommon<T> extends ICommon {
    ns?: string;
    method?: MethodType | string;
    path?: string;
    config?: T;
}
export interface IInterfaceModel<T> extends IInterfaceModelCommon<T> {
    defaultExecuteInfo?: IExecute;
    execute(options: IExecute, ...otherOptions: any[]): Promise<any>;
    getPath(extendInterface?: IInterfaceModelCommon<T>): string;
    getFullPath(options?: IExecute): string;
    replacePath(options?: IExecute): string;
    get(options?: IExecute, ...otherOptions: any[]): Promise<any>;
    getOne(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    post(options?: IExecute, ...otherOptions: any[]): Promise<any>;
    delete(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    put(id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
}
