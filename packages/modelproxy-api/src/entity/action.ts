import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, Index } from "typeorm";

import { TagEntity } from "./tag";
import { ProjectEntity } from "./project";

@Entity()
@Index(["key", "project"], { unique: true })
export class ActionEntity extends BaseEntity {

    /**
     * 接口ID
     */
    @PrimaryGeneratedColumn()
    public id?: number;

    /**
     * 接口唯一值
     */
    @Column({
        nullable: false
    })
    public key!: string;

    /**
     * 接口名称
     */
    @Column()
    public title!: string;

    /**
     * 接口说明
     */
    @Column()
    public description?: string;

    /**
     * 接口调用方式
     */
    @Column()
    public method?: string;

    /**
     * 接口路径
     */
    @Column()
    public path?: string;

    /**
     * 参数schema
     */
    @Column({
        default: ""
    })
    public paramSchema?: string;

    /**
     * 数据schema
     */
    @Column({
        default: ""
    })
    public dataSchema?: string;

    /**
     * 返回值schema
     */
    @Column({
        default: ""
    })
    public responseSchema?: string;

    /**
     * 所属tag
     */
    @ManyToOne(() => TagEntity, (tag: TagEntity) => tag.actions)
    @JoinColumn()
    public tag?: TagEntity;

    /**
     * 所属项目
     */
    @ManyToOne(() => ProjectEntity, (project: ProjectEntity) => project.actions)
    @JoinColumn()
    public project?: ProjectEntity;
}