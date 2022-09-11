import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('property_types')
export class PropertyType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "character varying" })
    name: string;
}