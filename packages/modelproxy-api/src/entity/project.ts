import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn } from "typeorm";

import { TagEntity } from "./tag";
import { ActionEntity } from "./action";
import { StateEntity } from "./state";

/**
 * 项目类
 */
@Entity()
export class ProjectEntity extends BaseEntity {

    /**
     * id
     */
    @PrimaryGeneratedColumn()
    public id?: number;

    /**
     * key，不能重复，用于调用接口使用
     */
    @Column({
        unique: true,
        nullable: false
    })
    public key!: string;

    /**
     * 项目名称
     */
    @Column()
    public projectName!: string;

    /**
     * 描述
     */
    @Column()
    public description!: string;

    /**
     * 项目下的所有的tag
     */
    @OneToMany(() => TagEntity, tag => tag.project)
    @JoinColumn()
    public tags?: TagEntity[];

    /**
     * 项目下的所有的state
     */
    @OneToMany(() => StateEntity, state => state.project)
    @JoinColumn()
    public states?: StateEntity[];

    /**
     * 项目下的所有的action
     */
    @OneToMany(() => ActionEntity, action => action.project)
    @JoinColumn()
    public actions?: ActionEntity[];

}