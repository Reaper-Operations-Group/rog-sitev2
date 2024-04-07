'use client'
import { Box, Tooltip, Menu, IconButton, MenuItem, Typography, Avatar, Link } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, MouseEvent } from "react";

export default function HeaderProfileNav(props: Readonly<{
    settings: {
        link: string,
        label: string
    }[]
}>) {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { data, status } = useSession();

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            {
                status === 'authenticated' ?
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={data.user?.name! || "Profile Picture"} src={data.user?.image!} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {props.settings.map((setting) => (
                                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                    <Link href={setting.link} sx={{
                                        textDecoration: "none"
                                    }}>
                                        <Typography textAlign="center">{setting.label}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={() => signOut()}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    :
                    <MenuItem onClick={() => signIn()}>
                        <Typography textAlign="center">Sign In</Typography>
                    </MenuItem>
            }
        </>
    )
}