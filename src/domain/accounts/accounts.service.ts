import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepo } from './repos/user.repo';
@Injectable()
export class AccountsService {
  constructor(private readonly userRepo: UserRepo) {}

  listUsers(): Promise<User[]> {
    return this.userRepo.list();
  }
}
