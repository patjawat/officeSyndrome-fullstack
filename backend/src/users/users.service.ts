import { Injectable, ForbiddenException, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}
  async signUp(signupUpDto: SignUpDto): Promise<Users> {
    try {
        const {
            username,
            password,
        } = signupUpDto

        const hashedPassword = await bcrypt.hashSync(password, 10)

        const user = this.usersRepository.create({
            username,
            password: hashedPassword,
        })

        return await this.usersRepository.save(user)
    } catch(e) {
        throw new ConflictException({
            message: ['Username has been already using.']
        })
    }
}

async findOneUser(username: string): Promise<Users | undefined> {
    const user = await this.usersRepository.findOne({where: {username: username}})
    return user
}
}