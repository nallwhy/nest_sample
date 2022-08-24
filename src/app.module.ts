import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './config/typeorm.config';
import { AccountsModule } from './accounts.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions), AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
