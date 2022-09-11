import { Injectable, Inject } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { UserService } from '../user/user.service';



@Injectable()
export class authService {

    constructor(private readonly UserService: UserService) { }

    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        const user = await this.UserService.create({
            email: dto.email,
            password: hash
        })
        return {
            msg: "Sign Up Successfully",
            user: {
                id: user.id,
                email: user.email,
              
            }
        }
    }

    signin() {
        return { msg: "I have signed in" }
    }

}