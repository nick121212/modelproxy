import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

import { TagEntity } from "./tag";
import { ProjectEntity } from "./project";

@Entity()
export class ActionEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({
        unique: true,
        nullable: false
    })
    public key!: string;

    @Column()
    public title!: string;

    @Column()
    public description?: string;

    @Column()
    public method?: string;

    @Column()
    public path?: string;

    @Column()
    public requestSchema?: string;

    @Column()
    public responseSchema?: string;

    @ManyToOne(() => TagEntity, (tag: TagEntity) => tag.actions)
    @JoinColumn()
    public tag?: TagEntity;

    @ManyToOne(() => ProjectEntity, (project: ProjectEntity) => project.actions)
    @JoinColumn()
    public project?: ProjectEntity;
}