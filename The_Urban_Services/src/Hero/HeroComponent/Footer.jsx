import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'Copyright © '}
            <Link color="text.secondary" href="https://mui.com/">
                Sitemark
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 6, sm: 10 },
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5', // Light background color
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
                }}
            >
                {/* Newsletter Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                        gap: { xs: 4, sm: 8 },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ fontWeight: 600, mt: 2, color: '#333' }}
                            >
                                Join the Newsletter
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                Subscribe for weekly updates. No spams ever!
                            </Typography>
                            <InputLabel htmlFor="email-newsletter" sx={{ fontWeight: 'bold' }}>
                                Email
                            </InputLabel>
                            <Stack direction="row" spacing={1} useFlexGap>
                                <TextField
                                    id="email-newsletter"
                                    hiddenLabel
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    aria-label="Enter your email address"
                                    placeholder="Your email address"
                                    slotProps={{
                                        htmlInput: {
                                            autoComplete: 'off',
                                            'aria-label': 'Enter your email address',
                                        },
                                    }}
                                    sx={{
                                        width: '250px',
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    sx={{
                                        flexShrink: 0,
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Box>

                    {/* Links Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 4, sm: 8 },
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                                Product
                            </Typography>
                            <Link color="text.secondary" variant="body2" href="#">
                                Features
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                                Company
                            </Typography>
                            <Link color="text.secondary" variant="body2" href="aboutus">
                                About us
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                                Legal
                            </Typography>
                            <Link color="text.secondary" variant="body2" href="#">
                                Terms
                            </Link>
                            <Link color="text.secondary" variant="body2" href="#">
                                Privacy
                            </Link>
                            <Link color="text.secondary" variant="body2" href="contact">
                                Contact
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Footer Bottom Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        mt: 4,
                        gap: { xs: 2, sm: 0 },
                    }}
                >
                    <Box>
                        <Link color="text.secondary" variant="body2" href="#">
                            Privacy Policy
                        </Link>
                        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            Terms of Service
                        </Link>
                        <Copyright />
                    </Box>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            justifyContent: 'center',
                            color: 'text.secondary',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{
                                alignSelf: 'center',
                                '&:hover': { color: '#333' },
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://x.com/MaterialUI"
                            aria-label="X"
                            sx={{
                                alignSelf: 'center',
                                '&:hover': { color: '#333' },
                            }}
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://www.linkedin.com/company/mui/"
                            aria-label="LinkedIn"
                            sx={{
                                alignSelf: 'center',
                                '&:hover': { color: '#333' },
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
};