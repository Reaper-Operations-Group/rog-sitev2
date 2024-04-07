import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { internalURLs } from "./constants";
import { $Enums, RoleName } from "@prisma/client";

function hasRole(userRoles: ($Enums.RoleName | undefined)[], roleToFind: RoleName) {
    if (userRoles) {
        for (const role of userRoles) {
            if (role === roleToFind) {
                return true;
            }
        }
    }
    return false;
}

function authenticateSession(session: Session | null, currentURL: string) {
    const userRoles = session?.user?.roles;

    if (userRoles) {
        // && Chaining - returns the first false value, or the last value if no false values are present
        switch(currentURL) {
            case internalURLs.root:
            case internalURLs.guest: {
                return redirect(internalURLs.memberDashboard);
            }
            case internalURLs.memberProfile:
            case internalURLs.memberDashboard:
            case internalURLs.memberOperations: {
                return !(hasRole(userRoles, "APPLICANT") || hasRole(userRoles, "CONTRACTOR")) && redirect(internalURLs.root);
            }
            case internalURLs.memberLogistics: {
                return !(hasRole(userRoles, "CONTRACTOR") || hasRole(userRoles, "QUARTERMASTER") || hasRole(userRoles, "QUARTERMASTER_ADMIN")) && redirect(internalURLs.memberDashboard);
            }
            case internalURLs.memberRecruitment: {
                return !(hasRole(userRoles, "RECRUITER") || hasRole(userRoles, "TEAM_LEAD")) && redirect(internalURLs.memberDashboard);
            }
            case internalURLs.admin: {
                return !(hasRole(userRoles, "SITE_ADMIN")) && redirect(internalURLs.memberDashboard);
            }

        }
    } else if (currentURL!==internalURLs.guest && currentURL!==internalURLs.root) {
            return redirect(internalURLs.root);
    }

}

export {
    authenticateSession,
    hasRole
}