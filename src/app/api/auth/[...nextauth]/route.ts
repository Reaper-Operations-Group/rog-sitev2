import SteamProvider from 'next-auth-steam'
import NextAuth from 'next-auth/next'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

import type { NextRequest } from 'next/server'
import { AuthOptions } from 'next-auth'

const prisma = new PrismaClient();

function getAuthOptions(req: NextRequest): AuthOptions {
    return {
        // @ts-ignore
        adapter: PrismaAdapter(prisma),
        providers: [
            SteamProvider(req, {
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
                    },
                });

                const steamAccount = prismaUser?.accounts.find((a: { provider: string }) => a.provider == "steam");

                // @ts-expect-error
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
    return NextAuth(req, ctx, getAuthOptions(req))
}

export {
    handler as GET,
    handler as POST,
    getAuthOptions
}