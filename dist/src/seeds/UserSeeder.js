"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeeder = void 0;
const User_1 = require("./../entities/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserSeeder {
    async run(dataSource, factoryManager) {
        const userRepository = dataSource.getRepository(User_1.User);
        const userData = {
            name: "Fulano da Silva",
            email: "fulano.silva@mail.com",
            apartment: 35,
            password: await bcrypt_1.default.hash("1313131313", 10),
            role: "Bloco Z",
        };
        const newUser = userRepository.create(userData);
        await userRepository.save(newUser);
        const { password: _, ...user } = newUser;
    }
}
exports.UserSeeder = UserSeeder;
