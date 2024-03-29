const internalURLs = {
    root: "/",
    guest: "/guest",
    memberDashboard: "/member",
    memberLogistics: "/member/logistics",
    memberOperations: "/member/operations",
    memberProfile: "/member/profile",
    admin: "/admin"
}

const assetLinks = {
    rogLogo: "/images/ROGLogo.webp"
}

const navbarPages = [
    {
        label: 'Operations',
        link: internalURLs.memberOperations,
    },
    {
        label: 'Logistics',
        link: internalURLs.memberLogistics,
    },
    {
        label: 'Admin',
        link: internalURLs.admin,
    }
];

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