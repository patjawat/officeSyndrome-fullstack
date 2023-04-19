import { Body, Controller, Delete, Get, HttpCode, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { LocalAuthGuard } from './local/local-auth.guard';
import { UsersService } from 'src/users/users.service';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService
        ) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req: any): Promise<any> {
        return this.authService.signIn(req.user)
        // return req.user;
    }
    

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user
    }


}
