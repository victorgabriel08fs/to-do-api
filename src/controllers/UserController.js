import { userUseCases } from "../useCases/UserUseCases.js";

class UserController {
    async index(req, res) {
        const result = await userUseCases.index();

        return res.send(result);
    }

}

export const userController = new UserController();