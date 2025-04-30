import { Link as NavLink } from 'react-router-dom';
import { Box, Button, Card, Checkbox, FormControlLabel, Link, Stack, TextField, Typography, useTheme } from '@mui/material';

const SignInPage = () => {
    const theme = useTheme();

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 200px)' }}>
            <Card sx={{ p: '24px 32px', maxWidth: '500px', width: '100%', m: 'auto', borderRadius: '20px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 500, mt: 3 }}>
                        Sign in
                    </Typography>
                    <Stack spacing={3} sx={{ mt: 5, width: '100%' }}>
                        <Box>
                            <Typography variant="subtitle2">Email Address</Typography>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': { borderRadius: 100 },
                                    input: { borderRadius: 100 },
                                    fieldset: { border: 'none' }
                                }}
                                required
                                fullWidth
                                placeholder="Enter email address"
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Password</Typography>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': { borderRadius: 100 },
                                    input: { borderRadius: 100 },
                                    fieldset: { border: 'none' }
                                }}
                                required
                                fullWidth
                                placeholder="Enter your password"
                            />
                        </Box>

                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <Link
                                href="#"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: theme.palette.primary[800],
                                    textDecorationColor: theme.palette.primary[800]
                                }}
                            >
                                Forgot password?
                            </Link>
                        </Stack>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2, borderRadius: 100, background: theme.palette.primary[800] }}
                            component={NavLink}
                            to="/"
                        >
                            Sign in now
                        </Button>
                        <Typography variant="subtitle2" sx={{ textAlign: 'center', fontSize: '14px' }}>
                            Don&apos;t have an account?{' '}
                            <Link
                                href="#"
                                sx={{ fontWeight: 600, color: theme.palette.primary[800], textDecorationColor: theme.palette.primary[800] }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Card>
        </Stack>
    );
};
export default SignInPage;
