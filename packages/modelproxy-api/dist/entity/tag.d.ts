import { BaseEntity } from "typeorm";
import { ProjectEntity } from "./project";
import { ActionEntity } from "./action";
/**
 * 标签
 */
export declare class TagEntity extends BaseEntity {
    /**
     * ID
     */
    id?: number;
    /**
     * 名称
     */
    tagName: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 对应的项目
     */
    project?: ProjectEntity;
    /**
     * 项目下的接口
     */
    actions?: ActionEntity[];
}
