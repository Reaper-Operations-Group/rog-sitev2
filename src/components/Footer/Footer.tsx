import { Toolbar, Typography } from "@mui/material";

export default function Footer() {
    return (<>
        <Toolbar/>
        <Typography textAlign="center">
            Copyright© {(new Date()).getFullYear()} ROG
        </Typography>
        </>
    );
}