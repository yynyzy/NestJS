import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from './service';
// import { CoreService } from '../Core/service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
