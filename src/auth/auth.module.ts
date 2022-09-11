import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";

import { AuthController } from "./auth.controller";
import { authService } from "./auth.service";

@Module({
    controllers: [AuthController],
    providers: [authService],
    imports: [UserModule]
})

export class AuthModule { }