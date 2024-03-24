import { Typography } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';

export default function WIP() {
    return (
        <Typography textAlign="center">
            <ConstructionIcon/>
            <ConstructionIcon fontSize="large"/>
            !!!WIP!!!
            <ConstructionIcon fontSize="large"/>
            <ConstructionIcon/>
        </Typography>
    )
}