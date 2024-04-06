import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { internalURLs } from "./constants";


function handleRedirect(session: Session | null, currentURL: string) {
    if (currentURL === internalURLs.root) {
        return session?.user ? redirect(internalURLs.memberDashboard) : null
    }
}

export {
    handleRedirect
}