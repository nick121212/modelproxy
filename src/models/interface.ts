import { MethodType } from "./method";
import { ICommon } from "./common";

/**
 * 接口模型
 */
export interface IInterfaceModel extends ICommon {
    /**
     * 命名空间名
     */
    ns?: string;
    /**
     * 调用方法
     */
    method: MethodType;
    /**
     * 接口地址
     */
    path: string;
    /**
     * 接口地址
     */
    config?: Object;
}