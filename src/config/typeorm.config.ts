import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 41234,
  username: 'postgres',
  password: 'postgres',
  database: 'nest_sample_dev',
  migrations: [`migrations/*.ts`],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);

const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...dataSourceOptions,
  autoLoadEntities: true,
};

export { dataSource, typeOrmModuleOptions };
