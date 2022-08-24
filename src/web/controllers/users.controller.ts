import { Controller, Get } from '@nestjs/common';
import { AccountsService } from 'src/domain/accounts/accounts.service';

@Controller('users')
export class UserController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  listUsers(): [] {
    return this.accountsService.listUsers();
  }
}
