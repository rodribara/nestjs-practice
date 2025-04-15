import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); //corsOptions . add allowed Origins
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
