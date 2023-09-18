import { prisma } from "../prisma/client.js";

class TaskUseCases {
    async index(query) {
        const count = await prisma.task.count({
            where: {
                workspaceId: Number(query.workspaceId)
            }
        });
        const tasks = await prisma.task.findMany({
            where: {
                workspaceId: Number(query.workspaceId)
            },
            include: {
                workspace: true
            }, orderBy: { createdAt: 'asc' }, orderBy: { status: 'asc' },
            take: Number(query.take) ?? 10,
        });
        return { count, tasks };
    }

    async show(id) {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!task) {
            return null;
        }
        return task;
    }

    async store(data) {
        const { title, description, workspaceId } = data;
        const newTask = await prisma.task.create({ data: { title, description, workspaceId: Number(workspaceId) } });

        return newTask;
    }

    async update(data, id) {
        const task = await prisma.task.update({
            where: {
                id: Number(id)
            },
            data
        });

        return task;
    }

    async change(id) {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!task) {
            return null;
        }

        const updatedTask = await prisma.task.update({
            where: {
                id: Number(id)
            }, data: {
                status: !task.status
            }
        });

        return updatedTask;
    }

    async delete(id) {
        const task = await prisma.task.findUnique({
            where: { id: Number(id) }
        });

        if (!task) {
            return null;
        }

        await prisma.task.delete({ where: { id: Number(id) } });

        return true;
    }
}

export const taskUseCases = new TaskUseCases();