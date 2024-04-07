import { hasRole } from "./session-management";
import { navbarPages } from "./constants";
import { RoleName } from "@prisma/client";

function generateNavbarPages(userRoles: RoleName[]) {
    const pages = [];

    if (hasRole(userRoles, "APPLICANT") || hasRole(userRoles, "CONTRACTOR")) {
        pages.push(navbarPages.operations);
    }

    if (hasRole(userRoles, "CONTRACTOR") || hasRole(userRoles, "QUARTERMASTER") || hasRole(userRoles, "QUARTERMASTER_ADMIN")) {
        pages.push(navbarPages.logistics);
    }

    if (hasRole(userRoles, "RECRUITER") || hasRole(userRoles, "TEAM_LEAD")) {
        pages.push(navbarPages.recruitment);
    }

    if (hasRole(userRoles, "SITE_ADMIN")) {
        pages.push(navbarPages.admin);
    }

    return pages;
}

export {
    generateNavbarPages
}