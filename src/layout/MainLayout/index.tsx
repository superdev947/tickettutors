import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

import Header from './Header';
import NavigationScroll from 'layout/NavigationScroll';

const Main = styled('main')({});
const MainLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:767px)');

    const header = useMemo(
        () => (
            <Toolbar>
                <Header />
            </Toolbar>
        ),
        []
    );

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
                        <AppBar
                            position="relative"
                            enableColorOnDark
                            color="inherit"
                            elevation={0}
                            sx={{ mb: isMobile ? '20px' : '40px', borderRadius: '12px' }}
                        >
                            {header}
                        </AppBar>
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

export default MainLayout;
