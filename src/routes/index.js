import { Router } from "express";
import { taskRoutes } from "./task.routes.js";
import { authRoutes } from "./auth.routes.js";

const routes = Router();

routes.use('/tasks', taskRoutes);
routes.use('/auth', authRoutes);

export default routes;