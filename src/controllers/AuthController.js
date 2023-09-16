import { authUseCases } from "../useCases/AuthUseCases.js";

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;

        const result = await authUseCases.login({ email, password });

        return res.send({ user: result });
    }

    async register(req, res) {
        const data = req.body;

        const result = await authUseCases.register(data);

        return res.status(result != null ? 200 : 400).send({ user: result });
    }
}

export const authController = new AuthController();