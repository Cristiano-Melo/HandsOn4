import { Post } from './../entities/Post';
import { User } from "../entities/User";
declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>
            post:Partial<Post>
        }
    }
}