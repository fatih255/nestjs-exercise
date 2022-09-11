import { IsNotEmpty, IsString } from "class-validator";



export class propertyTypeDto {

    @IsNotEmpty({ message: "Property name must not be empty" })
    @IsString()
    name: string;


}