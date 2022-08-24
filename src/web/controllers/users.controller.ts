import { Controller, Get } from '@nestjs/common';
import { AccountsService } from 'src/domain/accounts/accounts.service';
import { User } from 'src/domain/accounts/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async listUsers(): Promise<User[]> {
    return this.accountsService.listUsers();
  }
}
