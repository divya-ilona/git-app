import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { GithubStrategy } from './utils/GithubStrategy';
import { SessionSerializer } from './utils/Serializer';

@Module({
  controllers: [AuthController],
  providers: [
    GithubStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}