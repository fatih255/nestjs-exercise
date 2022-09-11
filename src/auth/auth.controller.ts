import { Body, Controller, Post } from "@nestjs/common";
import { authService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController {
    constructor(private authService: authService) { }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }

    @Post('signup')
    signup(@Body() dto: AuthDto) { //@Req() req: Request
        return this.authService.signup(dto)
    }
    
}