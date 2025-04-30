import { SvgIcon, useMediaQuery } from '@mui/material';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as MobileLogo } from 'assets/images/logo-mobile.svg';

const LogoComponent = () => {
    const isMobile = useMediaQuery('(max-width:767px)');
    if (isMobile) {
        return <SvgIcon sx={{ fill: 'none', width: '40px', height: '31px' }} component={MobileLogo} inheritViewBox />;
    }
    return <SvgIcon sx={{ fill: 'none', width: '209px', height: '31px' }} component={Logo} inheritViewBox />;
};

export default LogoComponent;
