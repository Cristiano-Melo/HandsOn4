"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const MainSeeder_1 = require("./seeds/MainSeeder");
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const port = process.env.DB_PORT;
const options = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    seeds: [MainSeeder_1.MainSeeder]
};
exports.AppDataSource = new typeorm_1.DataSource(options);
