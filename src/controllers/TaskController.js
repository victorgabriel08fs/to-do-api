import { taskUseCases } from "../useCases/TaskUseCases.js";

class TaskController {
    async index(req, res) {
        const query = req.query;
        const result = await taskUseCases.index(query);
        return res.json(result);
    }

    async show(req, res) {
        const { id } = req.params;
        const result = await taskUseCases.show(id);

        return res.json(result);
    }

    async store(req, res) {
        const data = req.body;

        const result = await taskUseCases.store(data);

        return res.json(result);
    }

    async update(req, res) {
        const data = req.body;
        const { id } = req.params;

        const result = await taskUseCases.update(data, id);

        return res.json(result);
    }

    async change(req, res) {
        const { id } = req.params;

        const result = await taskUseCases.change(id);

        return res.json(result);
    }

    async delete(req, res) {
        const { id } = req.params;

        const result = await taskUseCases.delete(id);

        return res.json(result);
    }
}

export const taskController = new TaskController();