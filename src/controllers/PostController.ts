import { postRepository } from './../repositories/postRepository';
import { Post } from './../entities/Post';
import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
export class PostController{
    async post(req: Request, res: Response){

        const {content} = req.body;

        const newPost = postRepository.create({
            content,
            

        }) ;
        await postRepository.save(newPost);

        return res.json({
            content,
        })  ;
}
//async getPosts(req: Request, res: Response){
    //const userPosts = await postRepository.findBy({id_user});
    

  //  return res.json(req.post);}}
}