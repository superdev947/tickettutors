import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';

import { DASHBOARD_PATH } from 'config';
import Logo from 'components/Logo';

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} sx={{ lineHeight: 0 }}>
        <Logo />
    </Link>
);

export default LogoSection;
