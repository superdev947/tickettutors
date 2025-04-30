import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Link, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import LogoSection from '../LogoSection';
import { ReactComponent as Sms } from 'assets/images/sms.svg';
import { ReactComponent as Notification } from 'assets/images/notification.svg';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:767px)');

    return (
        <>
            <Box
                sx={{
                    ml: isMobile ? '0px' : '8px',
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Stack direction="row" alignItems="center" spacing={isMobile ? 2 : 10}>
                    <LogoSection />
                    <Stack direction="row" alignItems="center" spacing={isMobile ? 2 : 5}>
                        <Link
                            component={NavLink}
                            to="#"
                            sx={{
                                fontWeight: 700,
                                fontSize: '16px',
                                color: theme.palette.primary.main,
                                textDecoration: 'none'
                            }}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="#"
                            component={NavLink}
                            sx={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: theme.palette.text.primary,
                                textDecoration: 'none'
                            }}
                        >
                            Profile
                        </Link>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" alignItems="center" spacing={isMobile ? 1 : 2} sx={{ mr: isMobile ? '0px' : '8px' }}>
                <IconButton>
                    <SvgIcon sx={{ fill: 'none' }} component={Sms} inheritViewBox />
                </IconButton>
                <IconButton>
                    <SvgIcon sx={{ fill: 'none' }} component={Notification} inheritViewBox />
                </IconButton>
            </Stack>
        </>
    );
};

export default Header;
