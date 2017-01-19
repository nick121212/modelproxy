import { MethodType } from "./method";
import { ICommon } from "./common";

/**
 * 接口模型
 */
export interface IInterfaceModel extends ICommon {
    // 唯一字符串
    key: string;
    // 接口说明
    title: string;
    // 调用方法
    method: MethodType;
    // 接口地址
    path: string;
    // 请求带上的配置
    config?: Object;
}