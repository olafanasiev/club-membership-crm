import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserModule} from '../user/user.module';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local.strategy';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './constants';
import {JwtStrategy} from './jwt.strategy';
import {UserService} from '../user/user.service';

@Module({
  imports: [UserModule, PassportModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  }),],
  exports: [AuthService],
  providers: [AuthService, LocalStrategy,JwtStrategy]
})
export class AuthModule {}
