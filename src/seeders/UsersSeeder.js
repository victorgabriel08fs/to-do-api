import SeederClass from "../classes/SeederClass.js";
import { prisma } from "../prisma/client.js";
import md5 from 'md5';

class UsersSeeder extends SeederClass {
    async run(count) {
        for (var i = 1; i <= count; i++) {
            await prisma.user.create({
                data: {
                    name: this.faker.person.fullName(),
                    email: this.faker.internet.email().toLocaleLowerCase(),
                    password: md5('password')
                }
            });
        }
        console.log('User seeder........');
    }
}

export const usersSeeder = new UsersSeeder();