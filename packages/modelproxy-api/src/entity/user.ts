import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public firstName!: string;

    @Column()
    public lastName!: string;

    @Column()
    public age!: number;
}