import { PrismaClient, RoleName } from "@prisma/client"
import { faker } from '@faker-js/faker';
import { randomInt } from "crypto";

const prisma = new PrismaClient();

async function seedRoles() {
    await prisma.role.createMany({
        data: [{
            name: RoleName.APPLICANT
        }, {
            name: RoleName.CONTRACTOR
        }, {
            name: RoleName.QUARTERMASTER
        }, {
            name: RoleName.QUARTERMASTER_ADMIN
        }, {
            name: RoleName.RECRUITER
        }, {
            name: RoleName.SITE_ADMIN
        }, {
            name: RoleName.TEAM_LEAD
        }]
    });
}

async function seedUsers() {
    const users = []
    for (let i = 0; i <= 30; i++) {
        const user = await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                image: faker.image.avatar()
            }
        });
        users.push(user);
    }
    return users;
}

async function seedUserRoles(users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null; }[]) {
    const roles = await prisma.role.findMany();

    for (const user of users) {
        for (let i = 0; i < randomInt(1,3); i++) {
            await prisma.userRoles.create({
                data: {
                    userId: user.id,
                    roleId: roles[randomInt(0, roles.length)].id
                }
            })
        }
    }
}

async function seedDev() {
    // Roles
    await seedRoles();

    // Users
    const users = await seedUsers();

    // User Roles
    await seedUserRoles(users)
}

async function seedProd() {
    // Roles
    await seedRoles();
}

if (process.env.VERCEL_ENV === "development") {
    // Populate test data in dev
    seedDev()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
} else {
    // Only seed roles in production
    seedProd()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}


