import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
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
            password: hashPassword, 
            role, 
            userimg
        });

        await userRepository.save(newUser);

        const {password: _, ...user} = newUser;

        return res.status(201).json(user);

    }

    
}