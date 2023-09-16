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
            const usersCount = await prisma.user.count();
            const skip = Math.floor(Math.random() * usersCount);
            const users = await prisma.user.findMany({
                take: 1,
                skip: skip,
            });
            const user = users.pop();
            await prisma.task.create({
                data: {
                    title: this.faker.word.words({ count: { min: 5, max: 10 } }),
                    description: Math.random() < 0.5 ? null : this.faker.word.words({ count: { min: 10, max: 12 } }),
                    userId: user.id
                }
            });
        }
        console.log('Tasks seeder........');
    }
}

export const tasksSeeder = new TasksSeeder();