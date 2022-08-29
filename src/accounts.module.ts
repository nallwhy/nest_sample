import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './web/controllers/users.controller';
import { AccountsService } from './domain/accounts/accounts.service';
import { User } from './domain/accounts/entities/user.entity';
import { UserRepo } from './domain/accounts/repos/user.repo';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [AccountsService, UserRepo],
})
export class AccountsModule {}
