import { Module, Global } from '@nestjs/common';
import { CoreService } from './service';

/**
 * Global 装饰器可以免去在其他 Module 中使用此 Module 中的 service ，需要在 module 中注入的过程
 */
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
