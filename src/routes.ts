import { authMiddleware } from './middlewares/authMiddleware';
import { LoginController } from './controllers/LoginController';
import { Router } from "express";
import { UserController } from './controllers/UserController';
import { PostController } from './controllers/PostController';

const routes = Router()

routes.post("/user", new UserController().create)
routes.post("/login", new LoginController().login)

routes.use(authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação
routes.post("/post", new PostController().post)
routes.get("/profile", new LoginController().getProfiles)
routes.put("/edituser", new UserController().editUser)

export default routes