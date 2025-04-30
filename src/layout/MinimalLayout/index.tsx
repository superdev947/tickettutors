import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, styled, SvgIcon, useMediaQuery, useTheme } from '@mui/material';
import NavigationScroll from 'layout/NavigationScroll';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Main = styled('main')({});
const MinimalLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:767px)');

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Main
                sx={{
                    ...theme.typography.mainContent,
                    '@media (max-width:767px)': {
                        padding: '20px'
                    }
                }}
            >
                <NavigationScroll>
                    <Container maxWidth="lg" sx={{ p: isMobile ? 0 : {} }}>
                        <SvgIcon sx={{ fill: 'none', width: '209px', height: '31px' }} component={Logo} inheritViewBox />
                        <Outlet />
                    </Container>
                </NavigationScroll>
            </Main>
            <Box className="light-group">
                <Box className="light-1" />
                <Box className="light-2" />
                <Box className="light-3" />
                <Box className="light-4" />
                <Box className="light-5" />
                <Box className="light-6" />
            </Box>
        </Box>
    );
};

export default MinimalLayout;
