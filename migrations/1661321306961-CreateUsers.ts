import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1661321306961 implements MigrationInterface {
  table = new Table({
    name: 'users',
    columns: [
      { name: 'id', type: 'bigserial', isPrimary: true },
      { name: 'name', type: 'varchar', isNullable: false },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
