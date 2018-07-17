import { BaseEntity } from "typeorm";
import { TagEntity } from "./tag";
import { ProjectEntity } from "./project";
export declare class ActionEntity extends BaseEntity {
    /**
     * 接口ID
     */
    id?: number;
    /**
     * 接口唯一值
     */
    key: string;
    /**
     * 接口名称
     */
    title: string;
    /**
     * 接口说明
     */
    description?: string;
    /**
     * 接口调用方式
     */
    method?: string;
    /**
     * 接口路径
     */
    path?: string;
    /**
     * 参数schema
     */
    paramSchema?: string;
    /**
     * 数据schema
     */
    dataSchema?: string;
    /**
     * 返回值schema
     */
    responseSchema?: string;
    /**
     * 所属tag
     */
    tag?: TagEntity;
    /**
     * 所属项目
     */
    project?: ProjectEntity;
}
