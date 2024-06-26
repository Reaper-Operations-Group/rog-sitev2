import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import WIP from "@/components/WIP/WIP";
import { internalURLs } from "@/util/constants";
import { authenticateSession } from "@/util/session-management";

/**
 * Guest Page
 * Roles - Only accessibly to unauthenticated users
 */
export default async function Guest() {
    const session = await getServerSession(getAuthOptions());
    authenticateSession(session, internalURLs.guest);
    return (
        <WIP/>
    )
}