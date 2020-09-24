import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('CHANK-CLOUD后台管理系统接口文档')
    .setDescription('文档描述')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 允许跨域
  app.enableCors();

  const PORT = process.env.ADMIN_PORT || 3000;

  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
