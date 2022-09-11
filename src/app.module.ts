import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UserModule,
    PropertyModule,
    ConfigModule.forRoot(), //for .env
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
