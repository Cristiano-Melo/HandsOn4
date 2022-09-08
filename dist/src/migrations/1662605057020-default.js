"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1662605057020 = void 0;
class default1662605057020 {
    constructor() {
        this.name = 'default1662605057020';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`userimg\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`userimg\` varchar(255) NOT NULL`);
    }
}
exports.default1662605057020 = default1662605057020;
