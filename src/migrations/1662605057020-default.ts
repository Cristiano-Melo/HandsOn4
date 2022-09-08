import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662605057020 implements MigrationInterface {
    name = 'default1662605057020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`userimg\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`userimg\` varchar(255) NOT NULL`);
    }

}
