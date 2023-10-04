import SeederClass from "../classes/SeederClass.js";
import { prisma } from "../prisma/client.js";

class TasksSeeder extends SeederClass {
    async run(count) {
        for (var i = 1; i <= count; i++) {
            var j;
            const tasks = await prisma.task.findMany();
            if (tasks.length == 0) {
                j = 1;
            } else {
                const last = tasks.pop();
                j = last.id + 1
            }
            const workspaceCount = await prisma.workspace.count();
            const skip = Math.floor(Math.random() * workspaceCount);
            const workspaces = await prisma.workspace.findMany({
                take: 1,
                skip: skip,
            });
            const workspace = workspaces.pop();
            await prisma.task.create({
                data: {
                    title: this.faker.word.words({ count: { min: 5, max: 10 } }),
                    description: Math.random() < 0.5 ? null : this.faker.word.words({ count: { min: 10, max: 12 } }),
                    workspaceId: workspace.id
                }
            });
        }
        console.log('Tasks seeder........');
    }
}

export const tasksSeeder = new TasksSeeder();