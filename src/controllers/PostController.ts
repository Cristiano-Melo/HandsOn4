import { User } from './../entities/User';
import { postRepository } from './../repositories/postRepository';
import { Post } from './../entities/Post';
import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
import { authMiddleware } from '../middlewares/authMiddleware'; 
import { Console } from 'console';
import { Any } from 'typeorm';
export class PostController{
    async post(req: Request, res: Response){

        const {content} = req.body;
        console.log(req.user);
        
        const newPost = postRepository.create({
            content,
            user:req.user,
            

        }) ;
        await postRepository.save(newPost);

        return res.json(newPost)  ;
}
async getAllPosts (req: Request, res: Response) {
    const posts = await postRepository.find({
        relations: {
            user: true
        },
        select: {
            user: {
                iduser: true,
                name: true,
                email: true,
                apartment: true,
            }
        }
    });
    return res.status(200).json(posts);
}
async getPosts(req: Request, res: Response){
    const idAtual = req.user.iduser;
    const userPosts = await postRepository.find({
        where:{
                user:{
                        iduser:idAtual
                }   
        }});
    

return res.json(userPosts);}}
