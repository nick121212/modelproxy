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
    /**
     * data字段 JSONSCHEMA，用于验证data的数据准确性
     */
    dataSchema?: JsonSchema;
    /**
     * params字段 JSONSCHEMA，用于验证params的数据准确性
     */
    paramsSchema?: JsonSchema;
}