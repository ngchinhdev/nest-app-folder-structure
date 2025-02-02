import { UserController } from '@/modules/user/user.controller';
import { UserService } from '@/modules/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
