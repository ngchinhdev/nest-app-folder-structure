import 'dotenv/config';

import { moduleConfigOptions } from '@/config/module.config';
import { dataSource } from '@/config/typeorm.config';
import { UserModule } from '@/modules/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(moduleConfigOptions),
    TypeOrmModule.forRoot(dataSource.options),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
