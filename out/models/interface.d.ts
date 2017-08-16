import { MethodType } from "./method";
import { ICommon } from "./common";
import { IExecute } from "./execute";
/**
 * 接口模型
 */
export interface IInterfaceModelCommon extends ICommon {
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
     * 接口地址
     */
    config?: Object;
}
export interface IInterfaceModel extends IInterfaceModelCommon {
    /**
     * 执行接口
     */
    execute(options: IExecute): Promise<any>;
    /**
     * 获取接口的执行路径
     */
    getPath(extendInstance?: IInterfaceModel): string;
    /**
     * 执行接口，修改method为get
     */
    get(id?: string | number | null, options?: IExecute): Promise<any>;
    /**
     * 执行接口，修改method为post
     */
    post(options?: IExecute): Promise<any>;
    /**
     * 执行接口，修改method为delete
     */
    delete(id?: string | number | null, options?: IExecute): Promise<any>;
    /**
     * 执行接口，修改method为put
     */
    put(id?: string | number | null, options?: IExecute): Promise<any>;
}
