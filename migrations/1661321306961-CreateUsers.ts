import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1661321306961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'bigserial', isPrimary: true },
          { name: 'name', type: 'varchar', isNullable: false },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
