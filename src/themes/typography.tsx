import { Theme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const Typography = (theme: Theme, borderRadius: number, fontFamily: string): TypographyOptions => ({
    fontFamily,
    h6: {
        fontWeight: 600,
        fontSize: '14px'
    },
    h5: {
        fontSize: '16px',
        fontWeight: 500
    },
    h4: {
        fontSize: '20px',
        fontWeight: 700
    },
    h3: {
        fontSize: '32px',
        fontWeight: 600
    },
    h2: {
        fontSize: '1.5rem',
        fontWeight: 700
    },
    h1: {
        fontSize: '32px',
        fontWeight: 700
    },
    subtitle1: {
        fontSize: '12px',
        fontWeight: 500,
        color: theme.palette.text.dark
    },
    subtitle2: {
        fontSize: '12px',
        fontWeight: 400,
        color: theme.palette.text.secondary
    },
    caption: {
        fontSize: '0.75rem',
        color: theme.palette.text.secondary,
        fontWeight: 400
    },
    body1: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '15px'
    },
    body2: {
        letterSpacing: '0em',
        fontWeight: 400,
        lineHeight: '1.5em',
        color: theme.palette.text.primary
    },
    button: {
        textTransform: 'capitalize'
    },
    customInput: {
        marginTop: 1,
        marginBottom: 1,
        '& > label': {
            top: 23,
            left: 0,
            color: theme.palette.grey[500],
            '&[data-shrink="false"]': {
                top: 5
            }
        },
        '& > div > input': {
            padding: '30.5px 14px 11.5px !important'
        },
        '& legend': {
            display: 'none'
        },
        '& fieldset': {
            top: 0
        }
    },
    mainContent: {
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        flexGrow: 1,
        padding: '40px 20px'
    },
    menuCaption: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: theme.palette.grey[600],
        padding: '6px',
        textTransform: 'capitalize',
        marginTop: '10px'
    },
    subMenuCaption: {
        fontSize: '0.6875rem',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        textTransform: 'capitalize'
    },
    commonAvatar: {
        cursor: 'pointer',
        borderRadius: '8px'
    },
    smallAvatar: {
        width: '22px',
        height: '22px',
        fontSize: '1rem'
    },
    mediumAvatar: {
        width: '34px',
        height: '34px',
        fontSize: '1.2rem'
    },
    largeAvatar: {
        width: '44px',
        height: '44px',
        fontSize: '1.5rem'
    }
});

export default Typography;
