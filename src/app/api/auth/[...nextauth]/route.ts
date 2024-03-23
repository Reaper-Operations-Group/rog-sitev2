import SteamProvider, { PROVIDER_ID } from 'next-auth-steam'
import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';

function getAuthOptions(req: NextApiRequest): AuthOptions {
    return {
        providers: req
            ? [
                SteamProvider(req, {
                    clientSecret: process.env.STEAM_SECRET!,
                    callbackUrl: 'http://localhost:3000/api/auth/callback',
                }),
            ]
            : [],
        callbacks: {
            jwt({ token, account, profile }) {
                if (account?.provider === PROVIDER_ID) {
                    token.steam = profile;
                }
                return token;
            },
            session({ session, token }) {
                if ('steam' in token) {
                    // @ts-expect-error
                    session.user.steam = token.steam;
                }
                return session;
            },
        },
    };
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return NextAuth(req, res, getAuthOptions(req));
}

export {
    handler as GET,
    handler as POST,
}