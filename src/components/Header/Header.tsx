import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderProfileNav from './HeaderProfileNav/HeaderProfileNav';
import HeaderMenuNav from './HeaderMenuNav/HeaderMenuNav';
import { navbarSettings } from '@/util/constants';
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { generateNavbarPages } from '@/util/navigation';

export default async function Header() {
    const session = await getServerSession(getAuthOptions());
    const navbarPages = session?.user.roles ? generateNavbarPages(session?.user?.roles) : [];
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderLogo screenSize="md" />
                        <HeaderMenuNav screenSize="md" pages={navbarPages} />

                        <HeaderMenuNav screenSize="sm" pages={navbarPages} />
                        <HeaderLogo screenSize="sm" />

                        <HeaderProfileNav settings={navbarSettings} />
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
}
