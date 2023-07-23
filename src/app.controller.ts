import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreService } from './Core/service';

// 交叉调用 core 的方法
@Controller()
export class AppController {
  constructor(
    private readonly coreService: CoreService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
