import md5 from "md5";
import { prisma } from "../prisma/client.js";

class AuthUseCases {
    async login({ email, password }) {
        const cipherPassword = md5(password);
        const users = await prisma.user.findMany({
            where: {
                email,
                password: cipherPassword
            }
        });

        const user = users[0];
        return user;
    }

    async register({ email, password, name }) {
        const emailAlready = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (emailAlready) {
            return null;
        }
        const cipher = md5(password);
        const data = { email, password: cipher, name };

        const user = await prisma.user.create({ data });
        return user;
    }
}

export const authUseCases = new AuthUseCases();