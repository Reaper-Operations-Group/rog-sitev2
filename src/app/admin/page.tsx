import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { internalURLs } from "@/util/constants";
import { authenticateSession } from "@/util/session-management";
import WIP from "@/components/WIP/WIP";

export default async function(){
    const session = await getServerSession(getAuthOptions());
    authenticateSession(session, internalURLs.guest);
    return <WIP/>
}