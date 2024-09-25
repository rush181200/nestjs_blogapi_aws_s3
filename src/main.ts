import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Personal Blogging Platform API')
    .setDescription('API documentation for the Blogging Platform')
    .setVersion('1.0')
    .addBearerAuth() // Use this if you have authentication (JWT, Bearer, etc.)
    .build();

  app.enableCors({
    origin: [
      'http://localhost:3000', // Replace with your React app URL
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If your app uses cookies
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI will be available at /api
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
