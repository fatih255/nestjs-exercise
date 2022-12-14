import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.useStaticAssets(join(__dirname, '/../public/uploads'),{prefix:"/uploads"});
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
