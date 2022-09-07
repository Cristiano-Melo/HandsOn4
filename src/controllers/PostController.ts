import { postRepository } from './../repositories/postRepository';
import { Post } from './../entities/Post';
import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
import { authMiddleware } from '../middlewares/authMiddleware'; 
import { Console } from 'console';
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
//async getPosts(req: Request, res: Response){
    //const userPosts = await postRepository.findBy({id_user});
    

  //  return res.json(req.post);}}
}