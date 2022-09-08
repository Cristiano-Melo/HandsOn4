"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postRepository_1 = require("./../repositories/postRepository");
class PostController {
    async post(req, res) {
        const { content } = req.body;
        console.log(req.user);
        const newPost = postRepository_1.postRepository.create({
            content,
            user: req.user,
        });
        await postRepository_1.postRepository.save(newPost);
        return res.json(newPost);
    }
    async getAllPosts(req, res) {
        const posts = await postRepository_1.postRepository.find({
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
    async getPosts(req, res) {
        const idAtual = req.user.iduser;
        const userPosts = await postRepository_1.postRepository.find({
            where: {
                user: {
                    iduser: idAtual
                }
            }
        });
        return res.json(userPosts);
    }
}
exports.PostController = PostController;
