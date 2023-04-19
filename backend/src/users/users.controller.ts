import { Controller, UseGuards,Body,Post, Get, Request, Param } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { Users } from './users.entity';
// import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
// import { RolesGuard } from 'src/auth/guards/roles.guard';
// import { RolesAllowed } from 'src/auth/decorators/roles.decorator';
// import { Roles } from 'src/auth/Roles';
// import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service'
// @ApiTags("Users")
@Controller('users')
// @UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    findAll(){
        return this.userService.getAllUsers();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    @Get('profile')
    // @RolesAllowed(Roles.USER)
    getProfile(@Request() req) {
        return req.user;
    }
    @Post('signup')
    signUp(
        @Body() signUpDto: SignUpDto
    ): Promise<Users> {
        return this.userService.signUp(signUpDto)
    }


}
