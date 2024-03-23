import SteamProvider from 'next-auth-steam'
import NextAuth from 'next-auth/next'

import type { NextRequest } from 'next/server'

async function handler(
    req: NextRequest,
    ctx: { params: { nextauth: string[] } }
) {
    return NextAuth(req, ctx, {
        providers: [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET!,
                callbackUrl: `${process.env.NEXTAUTH_URL!}/api/auth/callback`
            })
        ]
    })
}

export {
    handler as GET,
    handler as POST
}