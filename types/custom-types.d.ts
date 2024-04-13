import { Role, UserRoles, User } from "@prisma/client";

declare global {
    type UserWithRoles = {
        roles: ({
            role: Role;
        } & UserRoles)[];
    } & User
}

