import {
    Avatar,
    Button,
    Card,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Stack,
    SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { BorderColor, ChevronLeft, ChevronRight, Delete } from '@mui/icons-material';
import { ReactComponent as Profile } from 'assets/images/profile.svg';
import { ReactComponent as Sms } from 'assets/images/sms.svg';
import Mastercard from 'assets/images/mastercard.png';
import UserAvatar from 'assets/images/user.png';
import Paypal from 'assets/images/paypal.png';

const rows = [
    {
        reference: 'INV-C-2022-464418',
        date: 'July 22, 2022 - 8:00 AM',
        amount: '$40',
        status: 'Pending'
    },
    {
        reference: 'INV-C-2022-464419',
        date: 'July 22, 2022 - 8:00 AM',
        amount: '$40',
        status: 'Success'
    },
    {
        reference: 'INV-C-2022-464420',
        date: 'July 22, 2022 - 8:00 AM',
        amount: '$40',
        status: 'Success'
    },
    {
        reference: 'INV-C-2022-464421',
        date: 'July 22, 2022 - 8:00 AM',
        amount: '$40',
        status: 'Success'
    }
];

const DashboardPage = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={2}>
            <Grid item lg={7} xs={12}>
                <Card sx={{ p: '32px', borderRadius: '12px' }}>
                    <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'left' }}>
                            Account setting
                        </Typography>
                        <Stack direction="row" alignItems="center" sx={{ width: '100%', gap: 5 }}>
                            <Avatar alt="User Avatar" src={UserAvatar} sx={{ width: 80, height: 80, mb: 1 }} />
                            <Button variant="outlined">Upload new picture</Button>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: '150px' }}>
                                <SvgIcon sx={{ fill: 'none' }} component={Profile} inheritViewBox />
                                <Typography variant="h5">Account name</Typography>
                            </Stack>
                            <TextField sx={{ width: '100%' }} required fullWidth placeholder="Type your account name" />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: '150px' }}>
                                <SvgIcon sx={{ fill: 'none' }} component={Sms} inheritViewBox />
                                <Typography variant="h5">Email address</Typography>
                            </Stack>
                            <TextField sx={{ width: '100%' }} required fullWidth placeholder="Type your email adress" />
                        </Stack>
                    </Stack>
                </Card>
            </Grid>
            <Grid item lg={5} xs={12}>
                <Card sx={{ p: '32px', borderRadius: '12px' }}>
                    <Stack direction="column" spacing={2.3} sx={{ width: '100%' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'left' }}>
                            Change password
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography sx={{ minWidth: '110px' }} variant="h5">
                                Old password
                            </Typography>
                            <TextField sx={{ width: '100%' }} required fullWidth placeholder="Type your account name" />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography sx={{ minWidth: '110px' }} variant="h5">
                                New Password
                            </Typography>
                            <TextField sx={{ width: '100%' }} required fullWidth placeholder="Type your email adress" />
                        </Stack>
                        <Typography sx={{ pl: '120px' }} variant="subtitle2">
                            Minimum 6 characters
                        </Typography>
                        <Button size="large" fullWidth variant="outlined">
                            Upload new picture
                        </Button>
                    </Stack>
                </Card>
            </Grid>
            <Grid item lg={8} xs={12}>
                <Card sx={{ p: '32px', borderRadius: '12px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        Your payment
                    </Typography>
                    <TableContainer component={Paper} sx={{ mt: '20px' }}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#Reference</TableCell>
                                    <TableCell>Date and time</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, key) => (
                                    <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>{row.reference}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    color:
                                                        row.status === 'Pending' ? theme.palette.warning.main : theme.palette.success.main
                                                }}
                                            >
                                                {row.status}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="text">
                                                <FileDownloadIcon fontSize="small" />
                                                <Typography sx={{ fontWeight: 500 }}>Download</Typography>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle2">Showing 1 to 10 of 50</Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton size="small" sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }} color="primary" disabled>
                                <ChevronLeft />
                            </IconButton>
                            <IconButton size="small" sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }} color="primary">
                                <ChevronRight />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Card>
            </Grid>
            <Grid item lg={4} xs={12}>
                <Card sx={{ p: '32px', borderRadius: '12px' }}>
                    <Stack direction="column" spacing={2.3} sx={{ width: '100%' }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Payment Method On File
                            </Typography>
                            <Button variant="text">+ Add new</Button>
                        </Stack>
                        <List>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction="row" spacing={1}>
                                        <IconButton size="small" edge="end" aria-label="edit" color="primary">
                                            <BorderColor />
                                        </IconButton>
                                        <IconButton size="small" disabled edge="end" aria-label="delete" color="primary">
                                            <Delete />
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Paypal"
                                        src={Paypal}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            mb: 1,
                                            background: 'transparent',
                                            border: '1px solid #EEF7FF',
                                            img: {
                                                height: '30px',
                                                width: '30px'
                                            }
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ ml: 2 }}
                                    primary={
                                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                            Paypal
                                        </Typography>
                                    }
                                    secondary="***1212@gmail.com"
                                />
                            </ListItem>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction="row" spacing={1}>
                                        <IconButton size="small" edge="end" aria-label="edit" color="primary">
                                            <BorderColor />
                                        </IconButton>
                                        <IconButton size="small" edge="end" aria-label="delete" color="primary">
                                            <Delete />
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Mastercard"
                                        src={Mastercard}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            mb: 1,
                                            background: 'transparent',
                                            border: '1px solid #EEF7FF',
                                            img: {
                                                height: '30px',
                                                width: '30px'
                                            }
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ ml: 2 }}
                                    primary={
                                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                            Visa
                                        </Typography>
                                    }
                                    secondary="******076"
                                />
                            </ListItem>
                        </List>
                    </Stack>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DashboardPage;
