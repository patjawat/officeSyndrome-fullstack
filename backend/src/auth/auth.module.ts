import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWT_SECRET } from '../config/constants';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AccessTokenStrategy } from './jwt/accessToken.strategy';
import { RefreshTokenStrategy } from './jwt/refreshToken.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret:  configService.get<string>(JWT_SECRET),
          signOptions: { expiresIn: '2 days' },
        }
      }
    })
   
  ],
  
  providers: [AuthService, LocalStrategy, JwtStrategy, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [AuthService,UsersModule],
  controllers: [AuthController]
})
export class AuthModule {}
