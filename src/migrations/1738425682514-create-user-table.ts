import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1738425682514 implements MigrationInterface {
  name = 'CreateUserTable1738425682514';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`phone\` text NOT NULL, \`email\` text NOT NULL, \`password\` varchar(255) NOT NULL, \`isActivated\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
