import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 使用 NestFactory 工厂函数传人 AppModule 来创建一个 app 在 3000 端口监听
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
