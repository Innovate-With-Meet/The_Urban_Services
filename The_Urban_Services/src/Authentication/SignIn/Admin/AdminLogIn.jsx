import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { ForgotPassword } from "../Components/ForgotPassword";
import AppTheme from "../../../shared-theme/AppTheme";
import ColorModeSelect from "../../../shared-theme/ColorModeSelect";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "../Components/Customicons";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../Layout/Navbar";

export const AdminLogIn = (props) => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            return;
        }

        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        try {
            const response = await axios.post("http://localhost:8000/admin/login/", { email, password });

            if (response.data.access_token) {  // Fix: checking for 'access_token'
                storeUserCredentials(response.data.access_token, email);
                navigate("/admin/");
            } else {
                alert("Login failed: No token received.");
            }
        } catch (error) {
            console.error(error);
            alert(`Login failed: User Not Found`);
        }
    };
    const storeUserCredentials = (token1, email) => {
        localStorage.setItem("authToken", token1);
        localStorage.setItem("userEmail", email);
        alert("Login Successful");
    };


    //     if (emailError || passwordError) {
    //         return;
    //     }

    //     const data = new FormData(event.currentTarget);
    //     const email = data.get("email");
    //     const password = data.get("password");

    //     try {
    //         const response = await axios.post("http://localhost:8000/admin/login/", { email, password });

    //         if (response.data.access_token) {  // Fix: checking for 'access_token'
    //             storeUserCredentials(response.data.access_token, email);
    //             navigate("/UserProfile");
    //         } else {
    //             alert("Login failed: No token received.");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         alert(`Login failed: ${error.response?.data?.message || error.message}`);
    //     }
    // };
    // const storeUserCredentials = (token, email) => {
    //     localStorage.setItem("authToken", token);
    //     localStorage.setItem("userEmail", email);
    //     alert("Login Successful");
    // };



    const validateInputs = () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage("Password must be at least 6 characters long.");
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }

        return isValid;
    };

    const Card = styled(MuiCard)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "450px",
        padding: theme.spacing(4),
        gap: theme.spacing(2),
        margin: "auto",
        boxShadow:
            "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
        ...theme.applyStyles("dark", {
            boxShadow:
                "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
        }),
    }));

    const AdminLogInContainer = styled(Stack)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc((1 - var(--template-frame-height, 0)) * 105dvh auto)",
        width: "100vw",
        position: "relative",
        padding: theme.spacing(2),
        "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            zIndex: -1,
            inset: 0,
            backgroundImage:
                "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
            backgroundRepeat: "no-repeat",
            ...theme.applyStyles("dark", {
                backgroundImage:
                    "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
            }),
        },
    }));



    return (
        <div>
            <AppTheme {...props}>
                <CssBaseline enableColorScheme />
                {/* the background of the page */}
                <Navbar />
                <AdminLogInContainer direction="column" justifyContent="space-between">

                    <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
                    {/* css for the card modification */}

                    <Card variant="inlined">
                        {/* card initialized */}
                        <SitemarkIcon />
                        {/* logo of the website */}
                        <Typography
                            component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center", }}>
                            "Admin" Sign in
                        </Typography>
                        {/* text field */}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2, }}>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField sx={{ width: "390px" }} error={emailError} helperText={emailErrorMessage} id="email" type="email" name="email" placeholder="your@email.com" autoComplete="email" autoFocus required fullWidth variant="outlined" color={emailError ? "error" : "primary"} />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField error={passwordError} helperText={passwordErrorMessage} name="password" placeholder="••••••" type="password" id="password" autoComplete="current-password" autoFocus required fullWidth variant="outlined" color={passwordError ? "error" : "primary"} />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="check"
                                            onChange={(e) => {
                                                const pass = document.getElementById("password");
                                                pass.type = e.target.checked ? "text" : "password";
                                            }}
                                        />
                                    }
                                    label="Show Password"
                                />

                            </FormControl>

                            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                            <ForgotPassword open={open} handleClose={handleClose} />

                            <Button type="submit" fullWidth variant="contained" onClick={validateInputs} >
                                Sign in
                            </Button>

                            <Link component="button" type="button" onClick={handleClickOpen} variant="body2" sx={{ alignSelf: "center" }} >
                                Forgot your password?
                            </Link>
                        </Box>

                        <Divider>or</Divider>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {/* <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Google")} startIcon={<GoogleIcon />} >
                                Sign in with Google
                            </Button>

                            <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Facebook")} startIcon={<FacebookIcon />} >
                                Sign in with Facebook
                            </Button> */}

                            <Typography sx={{ textAlign: "center" }}> Don&apos;t have an account?{" "}
                                <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
                                    Sign up
                                </Link>
                            </Typography>

                        </Box>

                    </Card>

                </AdminLogInContainer>

            </AppTheme>

        </div>
    )
};