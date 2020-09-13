import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('CHANK-CLOUD后台管理系统接口文档')
    .setDescription('文档描述')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 允许跨域
  app.enableCors();

  await app.listen(9709);
  console.log('http://localhost:9709/api-docs');
}
bootstrap();
