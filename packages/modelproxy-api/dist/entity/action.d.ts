import { BaseEntity } from "typeorm";
import { TagEntity } from "./tag";
import { ProjectEntity } from "./project";
export declare class ActionEntity extends BaseEntity {
    id?: number;
    key: string;
    title: string;
    description?: string;
    method?: string;
    path?: string;
    requestSchema?: string;
    responseSchema?: string;
    tag?: TagEntity;
    project?: ProjectEntity;
}
