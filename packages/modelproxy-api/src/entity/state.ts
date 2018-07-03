import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

import { ProjectEntity } from "./project";

@Entity()
export class StateEntity extends BaseEntity {

    /**
     * id
     */
    @PrimaryGeneratedColumn()
    public id?: number;

    /**
     * 环境名称
     */
    @Column()
    public stateName!: string;

    /**
     * 环境描述
     */
    @Column()
    public description?: string;

    /**
     * 环境uri
     */
    @Column()
    public stateUri!: string;

    /**
     * 所属项目
     */
    @ManyToOne(() => ProjectEntity, (project: ProjectEntity) => project.states)
    @JoinColumn()
    public project?: ProjectEntity;
}