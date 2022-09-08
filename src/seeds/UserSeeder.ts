import { User } from './../entities/User';
import { userRepository } from './../repositories/userRepository';
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import bcrypt from "bcrypt"

export class UserSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const userRepository = dataSource.getRepository(User)

        const userData = {
            name: "Fulano da Silva",
            email: "fulano.silva@mail.com",
            apartment: 35,
            password: await bcrypt.hash("1313131313", 10),
            role: "Bloco Z",
        }
        const newUser = userRepository.create(userData);

        await userRepository.save(newUser);

        const {password: _, ...user} = newUser;

    }
}

