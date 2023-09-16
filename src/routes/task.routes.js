import { Router } from "express";
import { taskController } from "../controllers/TaskController.js";

const taskRoutes = Router();

taskRoutes.get('/', taskController.index);
taskRoutes.get('/:id', taskController.show);
taskRoutes.delete('/:id', taskController.delete);
taskRoutes.post('/', taskController.store);
taskRoutes.patch('/:id/change', taskController.change);
taskRoutes.patch('/:id', taskController.update);

export { taskRoutes };