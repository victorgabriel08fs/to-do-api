import { prisma } from "../prisma/client.js";

class UserUseCases {
    async index() {
        const users = await prisma.user.findMany();

        return users;
    }

}

export const userUseCases = new UserUseCases();