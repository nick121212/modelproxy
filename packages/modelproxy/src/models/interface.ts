import {MethodType} from "./method";
import {ICommon} from "./common";
import {IExecute} from "./execute";

/**
 * 接口模型
 */
export interface IInterfaceModelCommon<T> extends ICommon {
    /**
     * 命名空间名
     */
    ns?: string;
    /**
     * 调用方法
     */
    method?: MethodType | string;
    /**
     * 接口地址
     */
    path?: string;
    /**
     * 接口配置
     */
    config?: T;

}

export interface IInterfaceModel<R, D, P, C> extends IInterfaceModelCommon<C> {
    /**
     * 默认的执行参数
     */
    defaultExecuteInfo?: IExecute<D, P>;
    /**
     * 执行接口
     */
    execute(options: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    /**
     * 获取接口的执行路径
     */
    getPath(extendInterface?: IInterfaceModelCommon<C>): string;
    /**
     * 获取接口的执行路径
     */
    getFullPath(options?: IExecute<D, P>): string;
    /**
     * 替换路径
     */
    replacePath(options?: IExecute<D, P>): string;
    /**
     * 执行接口，修改method为get
     */
    get(options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    /**
     * 执行接口，修改method为get
     */
    getOne(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    /**
     * 执行接口，修改method为post
     */
    post(options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    /**
     * 执行接口，修改method为delete
     */
    delete(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    /**
     * 执行接口，修改method为put
     */
    put(id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
}
