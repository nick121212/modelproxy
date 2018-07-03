import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}
