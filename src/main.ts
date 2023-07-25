import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logInter';

async function bootstrap() {
  // 使用 NestFactory 工厂函数传人 AppModule 来创建一个 app 在 3000 端口监听
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor()); // 在全局使用拦截器（也可以添加在控制器上，或者某个方法上）
  await app.listen(3000);
}
bootstrap();
