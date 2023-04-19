import { Injectable, ForbiddenException, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}
  

    async getAllUsers(): Promise<Users[]>{
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<Users> {
          try {
           return  await this.usersRepository.findOne({where: {id: id}});
          } catch (error) {
            return null;
          }
        }

        
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
    return user;
}


}