import WIP from "@/components/WIP/WIP";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { authenticateSession } from "@/util/session-management";
import { internalURLs } from "@/util/constants";

/**
 * Member Page
 * Roles - [Applicant, Contractor]
 */
export default async function Member(){
    const session = await getServerSession(getAuthOptions());
    authenticateSession(session, internalURLs.memberDashboard);
    return (
        <WIP/>
    )
}