import { MethodType } from "./method";
import { ICommon } from "./common";
import { IExecute } from "./execute";
export interface IInterfaceModelCommon<T> extends ICommon {
    ns?: string;
    method?: MethodType | string;
    path?: string;
    config?: T;
}
export interface IInterfaceModel<R, D, P, C> extends IInterfaceModelCommon<C> {
    defaultExecuteInfo?: IExecute<D, P>;
    execute(options: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    getPath(extendInterface?: IInterfaceModelCommon<C>): string;
    getFullPath(options?: IExecute<D, P>): string;
    replacePath(options?: IExecute<D, P>): string;
    get(options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    getOne(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    post(options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    delete(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    put(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
}
