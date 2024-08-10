import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { UsersModule } from '../users/users.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] }), TokenModule, AuthModule, UsersModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..','..','..','client'),
    serveRoot: '/static/client'
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
