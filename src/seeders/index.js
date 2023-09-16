import { tasksSeeder } from "./TasksSeeder.js";
import { usersSeeder } from "./UsersSeeder.js";

const seeder = process.argv[2];
const count = process.argv[3];

if (seeder == 'users' || seeder == 'all') {
    await usersSeeder.run(count);
}
if (seeder == 'tasks' || seeder == 'all') {
    await tasksSeeder.run(count);
}

console.log('finished');