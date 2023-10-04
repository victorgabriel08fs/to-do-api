import { Router } from "express";
import { userController } from "../controllers/UserController.js";

const userRoutes = Router();

userRoutes.get('/',userController.index);

export {userRoutes};