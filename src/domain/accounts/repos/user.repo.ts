import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepo {
  constructor(
    @InjectRepository(User)
    private readonly source: Repository<User>,
  ) {}

  list(): Promise<User[]> {
    return this.source.find();
  }
}
