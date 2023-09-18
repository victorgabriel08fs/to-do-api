import { Router } from "express";
import { workspaceController } from "../controllers/WorkspaceController.js";

const workspaceRoutes = new Router();

workspaceRoutes.get('/', workspaceController.index);
workspaceRoutes.post('/', workspaceController.store);

export { workspaceRoutes };