import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}

    public getCookiesForLogOut() {
        return [
          'Authentication=; HttpOnly; Path=/; Max-Age=0',
          'Refresh=; HttpOnly; Path=/; Max-Age=0'
        ];
      }
      

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOneUser(username)
        if(user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user
            return result
        }
        return null
    }

    async signIn(user: any): Promise<any> {
        const payload = { 
            username: user.username,
             sub: user.id,
             role: user.role
             }

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

}
