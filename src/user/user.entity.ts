import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

export enum UserVerify {
    YES = "yes",
    NO = "no"
}


@Entity('users') //table name
//BaseEntity , Base abstract entity for all entities, used in ActiveRecord patterns.
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'timestamp', default: new Date(Date.now()) })
    createdAt: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    @Column({
        type: "enum",
        enum: UserVerify,
        default: UserVerify.NO,
    })
    verify: UserVerify;

}