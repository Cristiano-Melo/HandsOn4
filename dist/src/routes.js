"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("./middlewares/authMiddleware");
const LoginController_1 = require("./controllers/LoginController");
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const PostController_1 = require("./controllers/PostController");
const routes = (0, express_1.Router)();
routes.post("/user", new UserController_1.UserController().create);
routes.post("/login", new LoginController_1.LoginController().login);
routes.use(authMiddleware_1.authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação
routes.post("/post", new PostController_1.PostController().post);
routes.get("/profile", new LoginController_1.LoginController().getProfiles);
routes.get("/post", new PostController_1.PostController().getPosts);
routes.get("/allposts", new PostController_1.PostController().getAllPosts);
routes.put("/edituser", new UserController_1.UserController().editUser);
exports.default = routes;
