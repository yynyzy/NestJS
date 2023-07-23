import { Controller, Get, Logger } from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from '../Core/service';

/**
 * Logger 是 nest 自带的，可以 new Logger 来添加前缀
 */

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

  @Get('core')
  getAllCores(): string {
    console.log('normal log');
    Logger.log('nest logger');
    this.logger.log('my nest logger');
    return this.coreService.getAllCores();
  }
}
