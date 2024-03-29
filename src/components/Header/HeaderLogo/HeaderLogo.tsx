'use client'
import { Box, Typography } from "@mui/material";
import { internalURLs, assetLinks } from "@/util/constants";

export default function HeaderLogo(props: Readonly<{
    screenSize: "sm" | "md"
}>) {
    return (<>
        <Box
            component="img"
            alt="logo"
            src={assetLinks.rogLogo}
            sx={{
                height: "40px",
                display: {
                    xs: props.screenSize === "md" ? 'none' : "flex",
                    md: props.screenSize === "sm" ? "none" : "flex"
                },
                marginRight: "10px"
            }}
        />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href={internalURLs.root}
            sx={{
                mr: 2,
                display: {
                    xs: props.screenSize === "md" ? 'none' : "flex",
                    md: props.screenSize === "sm" ? "none" : "flex"
                },
                flexGrow: props.screenSize === "sm" ? 1 : 0,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            ROG
        </Typography>
    </>
    )
}