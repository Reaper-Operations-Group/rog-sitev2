import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderProfileNav from './HeaderProfileNav/HeaderProfileNav';
import HeaderMenuNav from './HeaderMenuNav/HeaderMenuNav';
import { navbarPages, navbarSettings } from '@/util/constants';

export default async function Header() {
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
