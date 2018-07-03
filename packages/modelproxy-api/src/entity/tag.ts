import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";

import { ProjectEntity } from "./project";
import { ActionEntity } from "./action";

/**
 * 标签
 */
@Entity()
export class TagEntity extends BaseEntity {

    /**
     * ID
     */
    @PrimaryGeneratedColumn()
    public id?: number;

    /**
     * 名称
     */
    @Column()
    public tagName!: string;

    /**
     * 描述
     */
    @Column()
    public description?: string;

    /**
     * 对应的项目
     */
    @ManyToOne(() => ProjectEntity, (project: ProjectEntity) => project.tags)
    @JoinColumn()
    public project?: ProjectEntity;

    /**
     * 项目下的接口
     */
    @OneToMany(() => ActionEntity, action => action.tag)
    @JoinColumn()
    public actions?: ActionEntity[];
}