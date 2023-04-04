import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: as .env variable
  app.enableCors({ origin: 'http://localhost:3000' });

  await app.listen(PORT);
}

bootstrap().then(() => console.log(`🌍 Server started on ${PORT}`));
