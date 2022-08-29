import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { AccountsService } from './accounts.service';
import { User } from './entities/user.entity';
import { UserRepo } from './repos/user.repo';

describe('listUsers/0', () => {
  let dataSource: DataSource;

  beforeEach(async () => {
    dataSource = new DataSource({
      entities: [User],
      ...dataSourceOptions,
    });

    await dataSource.initialize();
  });

  afterEach(() => {
    dataSource.destroy();
  });

  test('returns users with valid params', async () => {
    const source = dataSource.getRepository(User);
    const userRepo = new UserRepo(source);
    const accountsService = new AccountsService(userRepo);

    const users = await accountsService.listUsers();

    expect(users).toEqual([]);
  });
});
