import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class generalDto {
    @IsBoolean()
    @IsNotEmpty()
    ok: boolean;

    @IsString()
    @IsNotEmpty()
    message: string;
}