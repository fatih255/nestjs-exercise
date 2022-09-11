import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum purposeType {
    SALE = "sale",
    RENT = "rent"
}

@Entity('properties') //table name
export class Property extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "character varying" })
    price: string;

    @Column({ type: "text" })
    address: string;

    @Column({ type: "integer" })
    bathroom_size: number;

    @Column({ type: "integer" })
    bedroom_size: number;

    @Column({ type: "integer" })
    square_meters: number;

    @Column({ type: "text" })
    thumbnail_image: string;

    @Column({ type: "enum", enum: purposeType })
    purpose: string

    @Column({ type: "integer" })
    type_id: number
}