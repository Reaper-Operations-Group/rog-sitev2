import { Role } from "@prisma/client"

declare module "next-auth" {
    // Extend default session
    interface Session {
        user: {
            name: string | undefined,
            email: string | undefined,
            image: string | undefined,
            steamId: string | undefined,
            roles: (Role | null)[]
        }
    }
}