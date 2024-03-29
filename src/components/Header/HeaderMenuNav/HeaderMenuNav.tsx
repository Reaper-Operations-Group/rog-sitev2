'use client'
import * as React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography, Button, Link } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderMenuNav(props: {
    screenSize: "sm" | "md",
    pages: {
        link: string,
        label: string
    }[]
}) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return props.screenSize === "sm" ? (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {props.pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Link sx={{
                            textDecoration: "none"
                        }} href={page.link}><Typography textAlign="center">{page.label}</Typography></Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    ) : (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {props.pages.map((page) => (
                <Button
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link sx={{
                        color: "white",
                        textDecoration: "none"
                    }} href={page.link}>{page.label}</Link>
                </Button>
            ))}
        </Box>
    )
}