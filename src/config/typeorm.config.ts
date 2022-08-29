import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);

const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...dataSourceOptions,
  autoLoadEntities: true,
};

export { dataSource, typeOrmModuleOptions };
