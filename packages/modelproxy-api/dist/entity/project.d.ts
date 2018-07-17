import { BaseEntity } from "typeorm";
import { TagEntity } from "./tag";
import { ActionEntity } from "./action";
import { StateEntity } from "./state";
/**
 * 项目类
 */
export declare class ProjectEntity extends BaseEntity {
    /**
     * id
     */
    id?: number;
    /**
     * key，不能重复，用于调用接口使用
     */
    key?: string;
    /**
     * 项目名称
     */
    projectName?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 项目下的所有的tag
     */
    tags?: TagEntity[];
    /**
     * 项目下的所有的state
     */
    states?: StateEntity[];
    /**
     * 项目下的所有的action
     */
    actions?: ActionEntity[];
}
