
import { PrismaClient } from "@prisma/client"
import NextAuth from 'next-auth/next'
import type { NextRequest } from 'next/server'
import { AuthOptions } from 'next-auth'
import SteamProvider from 'next-auth-steam';
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient();

function getAuthOptions(req?: NextRequest): AuthOptions {
    return {
        // @ts-ignore
        adapter: PrismaAdapter(prisma),
        providers: [
            SteamProvider(req!, {
                clientSecret: process.env.STEAM_SECRET!,
                callbackUrl: `${process.env.NEXTAUTH_URL!}/api/auth/callback`
            })
        ],
        callbacks: {
            async session({ session }) {
                const prismaUser = await prisma.user.findUnique({
                    where: {
                        email: session.user?.email!,
                    },
                    include: {
                        accounts: true,
                        roles: true
                    },
                });

                const roles = [];
                for (let i = 0; i < prismaUser?.roles?.length!; i++) {
                    const role = prismaUser?.roles[i];
                    roles.push(await prisma.role.findUnique({
                        where: {
                            id: role?.roleId
                        }
                    }));
                }
                session.user.roles = roles;

                const steamAccount = prismaUser?.accounts.find((a: { provider: string }) => a.provider == "steam");
                session.user.steamId = steamAccount?.steamId;

                return session;
            },
        },
    }
}

async function handler(
    req: NextRequest,
    ctx: { params: { nextauth: string[] } }
) {
    // @ts-ignore
    return NextAuth(req, ctx, getAuthOptions(req, prisma))
}

export {
    handler as GET,
    handler as POST,
    getAuthOptions
}