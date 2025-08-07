import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for React app
  app.enableCors({
    origin: 'http://localhost:3001', // frontend URL
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
