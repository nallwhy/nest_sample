import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { AccountsService } from './accounts.service';
import { User } from './entities/user.entity';

describe('listUsers/0', () => {
  let dataSource;

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
    const userRepository = dataSource.getRepository(User);
    const accountsService = new AccountsService(userRepository);

    const users = await accountsService.listUsers();

    expect(users).toEqual([]);
  });
});
