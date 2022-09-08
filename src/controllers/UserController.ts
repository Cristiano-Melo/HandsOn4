import { userRepository } from './../repositories/userRepository';
import { validate } from 'class-validator';
import { Request, Response } from "express";
import { User } from '../entities/User';
import bcrypt from "bcrypt";

export class UserController {
    async create(req: Request, res: Response){
        const { name, email, apartment, password, role, userimg } = req.body;

        const userExists = await userRepository.findOneBy({email});

        if(userExists){
            return res.status(400).json({message: "Email já cadastrado!"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = userRepository.create({
            name, 
            email, 
            apartment, 
            password: hashPassword 
        });

        await userRepository.save(newUser);

        const {password: _, ...user} = newUser;

        return res.status(201).send(user);

    }

    async editUser (req: Request, res: Response) {
		const { name, apartment, email, role, password } = req.body
		const iduser : number = parseInt(req.params.idUser)
		let user : User

		try {
			user = await userRepository.findOneByOrFail({ iduser: Number(iduser) })
		} catch (error) {
			return res.status(404).send("User not found")
		}

		if(name) {
			user.name = name
		}
		
		if(email) {
			user.email = email
		}
			
		if(apartment) {
			user.apartment = apartment
		}

		if(role) {
			user.role = role
		}
		
		if(password){
			const newPassword = bcrypt.hashSync(password, 10)
			user.password = newPassword
		}
		
		const errors = await validate(user)

        if (errors.length > 0) {
            return res.status(400).send(errors)
        }

        try {
            await userRepository.save(user)    
        } catch (error) {
            return res.status(409).send("Email already in use")
        }

        return res.status(201).send("edited user")
    }

    
}