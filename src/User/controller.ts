import {
  Controller,
  Get,
  Logger,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from '../Core/service';
import { AuthGuard } from 'src/AuthGuard';

/**
 * Logger 是 nest 自带的，可以 new Logger 来添加前缀
 */
@UseGuards(new AuthGuard(100))
@Controller('user')
export class UserController {
  private readonly logger;
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
  ) {
    this.logger = new Logger('User Logger');
  }

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }
  @Get('all')
  getAllUSer(): string {
    return this.userService.getAllUser();
  }

  // 交叉调用，调用 Core 下的 service
  @Get('core')
  getAllCores(): string {
    console.log('normal log');
    Logger.log('nest logger');
    this.logger.log('my nest logger');
    return this.coreService.getAllCores();
  }

  // 通过 @params 来获取 url params 参数
  @Get('demo/:key')
  getUrlParams(@Param('key') key: string): string {
    console.log(`key=${key}`);
    return `url params = ${key}`;
  }

  // 通过 @Query 来获取 url query 参数
  // @Get('demo')
  // getUrlQuery(@Query q: any): string {
  //   return `url Query a=${q.a}&b=${q.b}`;
  // }
  @Get('demo')
  getUrlQuery(@Query('a') a: string, @Query('b') b: number): string {
    return `url Query a=${a}&b=${b}`;
  }
}
