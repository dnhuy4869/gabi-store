import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './auth.constants';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: JWT_SECRET,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
