import { authMiddleware } from './middlewares/authMiddleware';
import { LoginController } from './controllers/LoginController';
import { Router } from "express";
import { UserController } from './controllers/UserController';

const routes = Router()

routes.post("/user", new UserController().create)
routes.post("/login", new LoginController().login)

routes.use(authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação

routes.get("/profile", new LoginController().getProfiles)

export default routes