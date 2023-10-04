import { prisma } from "../prisma/client.js";

class WorkspaceUseCases {
    async index(query) {
        const count = await prisma.workspace.count({
            where: {
                userId: Number(query.userId)
            }, orderBy: { title: 'asc' }
        });
        const workspaces = await prisma.workspace.findMany({
            where: {
                userId: Number(query.userId)
            }, orderBy: { title: 'asc' }
        });
        return { count, workspaces };
    }

    async store(data) {
        const workspace = await prisma.workspace.create({ data });

        return workspace;
    }
}

export const workspaceUseCases = new WorkspaceUseCases();