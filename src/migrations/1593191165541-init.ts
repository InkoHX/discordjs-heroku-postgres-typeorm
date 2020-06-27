import {MigrationInterface, QueryRunner} from "typeorm";

export class init1593191165541 implements MigrationInterface {
    name = 'init1593191165541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "guild_member_settings" ("id" character varying NOT NULL, CONSTRAINT "PK_24b5da3692b05448d1d5e36ed94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guild_settings" ("id" character varying NOT NULL, CONSTRAINT "PK_259bd839beb2830fe5c2ddd2ff5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_settings" ("id" character varying NOT NULL, CONSTRAINT "PK_00f004f5922a0744d174530d639" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_settings"`);
        await queryRunner.query(`DROP TABLE "guild_settings"`);
        await queryRunner.query(`DROP TABLE "guild_member_settings"`);
    }

}
