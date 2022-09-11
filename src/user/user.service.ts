import { Injectable, Inject } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {


    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(data: AuthDto): Promise<User> {
        return this.userRepository.save({
            email: data.email,
            password: data.password,
        })

    }


}
