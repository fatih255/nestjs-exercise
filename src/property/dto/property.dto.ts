import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { PropertyType } from "../entities/propertyType.entity"



export class PropertyDto {

    @IsNotEmpty()
    @IsString()
    price: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsNumber()
    bathroom_size: number

    @IsNotEmpty()
    @IsNumber()
    bedroom_size: number

    @IsNotEmpty()
    @IsNumber()
    square_meters: number

    @IsNotEmpty()
    @IsString()
    thumbnail_image: string

    @IsNotEmpty()
    @IsNumber()
    type_id: number

    @IsNotEmpty()
    @IsEnum(PropertyType)
    purpose: string

}