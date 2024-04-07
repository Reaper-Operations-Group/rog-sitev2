import { RoleName } from "@prisma/client";
import { hasRole } from "./session-management";

const internalURLs = {
    root: "/",
    guest: "/guest",
    memberDashboard: "/member",
    memberLogistics: "/member/logistics",
    memberRecruitment: "/member/recruitment",
    memberOperations: "/member/operations",
    memberProfile: "/member/profile",
    admin: "/admin"
}

const assetLinks = {
    rogLogo: "/images/ROGLogo.webp"
}

const navbarPages = {
    operations: {
        label: 'Operations',
        link: internalURLs.memberOperations,
    },
    logistics: {
        label: 'Logistics',
        link: internalURLs.memberLogistics,
    },
    recruitment: {
        label: 'Recruitment',
        link: internalURLs.memberRecruitment
    },
    admin: {
        label: 'Admin',
        link: internalURLs.admin,
    }
};

const navbarSettings = [
    {
        label: "Profile",
        link: internalURLs.memberProfile,
    },
]

export {
    internalURLs,
    assetLinks,
    navbarPages,
    navbarSettings
};