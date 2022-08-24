import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 41234,
  username: 'postgres',
  password: 'postgres',
  database: 'nest_sample_dev',
  migrations: [`migrations/*.ts`],
  migrationsTableName: 'migrations',
});

export { dataSource };
