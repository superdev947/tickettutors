import {
    Avatar,
    Box,
    Button,
    Card,
    Divider,
    Grid,
    IconButton,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UserAvatar from 'assets/images/user.png';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const rows1 = [
    {
        id: '#01',
        date: 'July 22, 2022 - 8:00 AM',
        name: 'Jane Nurdiansyah',
        duration: '2 hours',
        amount: '$40',
        mathematics: 'Mathematics'
    },
    {
        id: '#02',
        date: 'July 22, 2022 - 8:00 AM',
        name: 'Jane Nurdiansyah',
        duration: '2 hours',
        amount: '$40',
        mathematics: 'Mathematics'
    },
    {
        id: '#03',
        date: 'July 22, 2022 - 8:00 AM',
        name: 'Jane Nurdiansyah',
        duration: '2 hours',
        amount: '$40',
        mathematics: 'Mathematics'
    },
    {
        id: '#04',
        date: 'July 22, 2022 - 8:00 AM',
        name: 'Jane Nurdiansyah',
        duration: '2 hours',
        amount: '$40',
        mathematics: 'Mathematics'
    }
];

const rows2 = [
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

const weeks = ['Monday', 'Tuesday', '', 'Wednesday', 'Thursday', 'Friday'];

const DashboardPage = () => {
    const theme = useTheme();
    const TimeList = () => (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{
                px: '12px',
                gap: '5px',
                height: '39px',
                background: theme.palette.grey[50],
                borderRadius: '6px'
            }}
        >
            <Typography variant="body1">8:00 AM</Typography>
            <Typography variant="body1">to</Typography>
            <Typography variant="body1">3:00 PM</Typography>
        </Stack>
    );
    return (
        <Grid container spacing={2}>
            <Grid item lg={4} xs={12}>
                <Card sx={{ p: '32px', borderRadius: '12px' }}>
                    <Stack direction="column" alignItems="center" spacing={1}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Your Profile
                            </Typography>
                            <Button variant="text" component={Link} to="account">
                                <CreateOutlinedIcon fontSize="small" />
                                <Typography variant="h5">Edit profile</Typography>
                            </Button>
                        </Stack>
                        <Avatar alt="User Avatar" src={UserAvatar} sx={{ width: 100, height: 100, mb: 1 }} />
                        <Typography variant="h4">Salman Alfarizi</Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: theme.palette.primary.main
                            }}
                        >
                            Mathematics
                        </Typography>
                    </Stack>
                    <Divider sx={{ my: 3 }} />
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h6">Meeting Notification Preferences</Typography>
                        {weeks.map((item, key) => (
                            <Box
                                key={key}
                                gap={2}
                                display="grid"
                                gridTemplateColumns="repeat(12, 1fr)"
                                sx={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Box gridColumn="span 4">
                                    <Typography variant="subtitle2">{item}</Typography>
                                </Box>
                                <Box gridColumn="span 8">
                                    <TimeList />
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                    <Stack alignItems="center">
                        <Button variant="text" color="error" sx={{ mt: 3 }} component={Link} to="signin">
                            Logout
                        </Button>
                    </Stack>
                </Card>
            </Grid>
            <Grid item lg={8} xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card sx={{ p: '32px', borderRadius: '12px' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Job History
                            </Typography>
                            <TableContainer component={Paper} sx={{ mt: '20px' }}>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#no</TableCell>
                                            <TableCell>Date and time</TableCell>
                                            <TableCell>Student name</TableCell>
                                            <TableCell>Duration</TableCell>
                                            <TableCell>Amount</TableCell>
                                            <TableCell>Mathematics</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows1.map((row, key) => (
                                            <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.duration}</TableCell>
                                                <TableCell>{row.amount}</TableCell>
                                                <TableCell>{row.mathematics}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Showing 1 to 10 of 50</Typography>
                                <Stack direction="row" spacing={1}>
                                    <IconButton
                                        size="small"
                                        sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }}
                                        color="primary"
                                        disabled
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                    <IconButton size="small" sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }} color="primary">
                                        <ChevronRight />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
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
                                        {rows2.map((row, key) => (
                                            <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>{row.reference}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.amount}</TableCell>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color:
                                                                row.status === 'Pending'
                                                                    ? theme.palette.warning.main
                                                                    : theme.palette.success.main
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
                                    <IconButton
                                        size="small"
                                        sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }}
                                        color="primary"
                                        disabled
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                    <IconButton size="small" sx={{ borderRadius: '2px', border: '1px solid #eeeeee' }} color="primary">
                                        <ChevronRight />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardPage;
