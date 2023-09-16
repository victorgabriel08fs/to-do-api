import { Router } from "express";
import { authController } from "../controllers/AuthController.js";

const authRoutes = new Router();

authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);

export { authRoutes };