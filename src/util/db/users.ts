import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUsers() {
    return prisma.user.findMany({
        include: {
            roles: {
                include: {
                    role: true
                }
            }
        }
    });
}

async function deleteUserByID(id: string) {
    return prisma.user.delete({
        where: {
            id: id
        }
    })
}

export {
    getAllUsers,
    deleteUserByID
}