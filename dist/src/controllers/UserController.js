"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userRepository_1 = require("./../repositories/userRepository");
const class_validator_1 = require("class-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    async create(req, res) {
        const { name, email, apartment, password } = req.body;
        const userExists = await userRepository_1.userRepository.findOneBy({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email já cadastrado!" });
        }
        const hashPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = userRepository_1.userRepository.create({
            name,
            email,
            apartment,
            password: hashPassword
        });
        await userRepository_1.userRepository.save(newUser);
        const { password: _, ...user } = newUser;
        return res.status(201).send(user);
    }
    async editUser(req, res) {
        const { name, apartment, email, role, password } = req.body;
        const iduser = req.user.iduser;
        let user;
        try {
            user = await userRepository_1.userRepository.findOneByOrFail({ iduser: Number(iduser) });
        }
        catch (error) {
            return res.status(404).send("User not found");
        }
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        if (apartment) {
            user.apartment = apartment;
        }
        if (role) {
            user.role = role;
        }
        if (password) {
            const newPassword = bcrypt_1.default.hashSync(password, 10);
            user.password = newPassword;
        }
        const errors = await (0, class_validator_1.validate)(user);
        if (errors.length > 0) {
            return res.status(400).send(errors);
        }
        try {
            await userRepository_1.userRepository.save(user);
        }
        catch (error) {
            return res.status(409).send("Email already in use");
        }
        return res.status(201).send("edited user");
    }
}
exports.UserController = UserController;
