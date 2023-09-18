import { workspaceUseCases } from "../useCases/WorkspaceUseCases.js";

class WorkspaceController {
    async index(req, res) {
        const query = req.query;

        const result = await workspaceUseCases.index(query);

        return res.send(result);
    }

    async store(req, res) {
        const data = req.body;

        const result = await workspaceUseCases.store(data);

        return res.send(result);
    }
}

export const workspaceController = new WorkspaceController();