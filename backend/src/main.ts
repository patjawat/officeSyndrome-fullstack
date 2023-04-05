import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  
  const configService = app.get(ConfigService)

  const port  = +configService.get<Number>(SERVER_PORT) || 3000;

  await app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
