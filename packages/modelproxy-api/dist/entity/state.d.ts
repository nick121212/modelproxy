import { BaseEntity } from "typeorm";
import { ProjectEntity } from "./project";
export declare class StateEntity extends BaseEntity {
    /**
     * id
     */
    id?: number;
    /**
     * 环境名称
     */
    stateName: string;
    /**
     * 环境描述
     */
    description?: string;
    /**
     * 环境uri
     */
    stateUri: string;
    /**
     * 所属项目
     */
    project?: ProjectEntity;
}
