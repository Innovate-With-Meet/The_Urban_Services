import * as React from "react";
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
import { ForgotPassword } from "./Components/ForgotPassword";
import AppTheme from "../../shared-theme/AppTheme";
import ColorModeSelect from "../../shared-theme/ColorModeSelect";
import {
  GoogleIcon, // for the Google Icon
  FacebookIcon, // for the facebook logo
  SitemarkIcon, // for the logo
} from "./Components/Customicons";
import axios from 'axios';

export const SignIn = (props) => {
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
    if (emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await axios.post("http://localhost:8000/user/login", { email, password });
      console.log(response.data);
      // Handle successful sign-in (e.g., store token, redirect)
    } catch (error) {
      console.error(error);
      // Handle sign-in error
    }
  };

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

  const SignInContainer = styled(Stack)(({ theme }) => ({
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
    <>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />

        <SignInContainer direction="column" justifyContent="space-between">
          <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
          <Card variant="inlined">
            <SitemarkIcon />
            <Typography
              component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center", }}>
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2, }}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField sx={{ width: "390px" }} error={emailError} helperText={emailErrorMessage} id="email" type="email" name="email" placeholder="your@email.com" autoComplete="email" autoFocus required fullWidth variant="outlined" color={emailError ? "error" : "primary"} />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField error={passwordError} helperText={passwordErrorMessage} name="password" placeholder="••••••" type="password" id="password" autoComplete="current-password" autoFocus required fullWidth variant="outlined" color={passwordError ? "error" : "primary"} />
              </FormControl>

              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
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
              <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Google")} startIcon={<GoogleIcon />} >
                Sign in with Google
              </Button>

              <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Facebook")} startIcon={<FacebookIcon />} >
                Sign in with Facebook
              </Button>

              <Typography sx={{ textAlign: "center" }}> Don&apos;t have an account?{" "}
                <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignInContainer>
      </AppTheme>
    </>
  );
};



// // my code
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Divider from "@mui/material/Divider";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import Link from "@mui/material/Link";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import MuiCard from "@mui/material/Card";
// import { styled } from "@mui/material/styles";
// import { ForgotPassword } from "./Components/ForgotPassword";
// import AppTheme from "../../shared-theme/AppTheme";
// import ColorModeSelect from "../../shared-theme/ColorModeSelect";
// import {
//   GoogleIcon, // for the Google Icon
//   FacebookIcon, // for the facebook logo
//   SitemarkIcon, // for the logo
// } from "./Components/Customicons";
// import axios from 'axios';
// import { signIn } from "../../../../Urban-Sservice-Backend"; // Add this line
// // import { signIn } from "../../api"; // Add this line

// // *****
// export const SignIn = (props) => {
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
//   const [open, setOpen] = React.useState(false);
//   //
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   // for what is open and close
//   const handleClose = () => {
//     setOpen(false);
//     // for what is open and close
//   };
//   //
//   const res = await axios.post("/user/login", data);

//   //
//   const handleSubmit = async (event) => { //modify the code here--------------------
//     event.preventDefault();
//     if (emailError || passwordError) {
//       return;
//       // if emailerror or password error is true than prevent the form for submit
//     }

//     const data = new FormData(event.currentTarget);
//     // console.log({
//     const email = data.get("email");
//     const password = data.get("password");
//     try {
//       const response = await SignIn(email, password);
//       console.log(response);

//     } catch (error) {
//       console.error(error);
//     }
//     // })

//     // may be modify here add the data at here
//   };
//   //

//   // ===
//   const validateInputs = () => {
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     // may be modify here add the data at here

//     let isValid = true;

//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//       setEmailError(true);
//       setEmailErrorMessage("Please enter a valid email address.");
//       isValid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage("");
//     } // verification for the given input is valid or not for the email
//     if (!password.value || password.value.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage("Password must be at least 6 characters long.");
//       isValid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage("");
//     } // verification for the given input is valid or not for the password

//     return isValid;
//   };

//   // ==== the Front - End
//   // First Function
//   const Card = styled(MuiCard)(({ theme }) => ({
//     display: "flex",
//     flexDirection: "column",
//     // alignSelf: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     maxWidth: "450px", // Properly restrict width

//     padding: theme.spacing(4),
//     gap: theme.spacing(2),
//     margin: "auto",
//     // [theme.breakpoints.up("sm")]: {
//     //   maxWidth: "450px",
//     // },
//     boxShadow:
//       "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
//     ...theme.applyStyles("dark", {
//       boxShadow:
//         "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
//     }),
//   }));
//   const SignInContainer = styled(Stack)(({ theme }) => ({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "calc((1 - var(--template-frame-height, 0)) * 105dvh auto)",
//     // height: "100vh", // Full viewport height
//     width: "100vw", // Full viewport width
//     // minHeight: "100%",
//     position: "relative",
//     padding: theme.spacing(2),
//     // [theme.breakpoints.up("sm")]: {
//     //   padding: theme.spacing(4),
//     // },
//     "&::before": {
//       content: '""',
//       display: "block",
//       position: "absolute",
//       zIndex: -1,
//       inset: 0,
//       backgroundImage:
//         "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
//       backgroundRepeat: "no-repeat",
//       ...theme.applyStyles("dark", {
//         backgroundImage:
//           "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
//       }),
//     },
//   }));

//   // Second funnction
//   return (
//     <>
//       <AppTheme {...props}>
//         <CssBaseline enableColorScheme /> {/*  UI-UX-Styling  */}

//         <SignInContainer direction="column" justifyContent="space-between">
//           <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
//           {/*  UI-UX-Styling  */}
//           <Card variant="inlined">
//             <SitemarkIcon /> {/*  UI-UX-Styling For the logo */}
//             <Typography
//               component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center", }}>
//               {/*  UI-UX-Styling  */}
//               Sign in
//             </Typography>

//             {/* Box 1 Start Here */}
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2, }}>
//               {/* 1 */}
//               <FormControl>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <TextField sx={{ width: "390px" }} error={emailError} helperText={emailErrorMessage} id="email" type="email" name="email" placeholder="your@email.com" autoComplete="email" autoFocus required fullWidth variant="outlined" color={emailError ? "error" : "primary"} />
//               </FormControl>

//               {/* 2 */}
//               <FormControl>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <TextField error={passwordError} helperText={passwordErrorMessage} name="password" placeholder="••••••" type="password" id="password" autoComplete="current-password" autoFocus required fullWidth variant="outlined" color={passwordError ? "error" : "primary"} />
//               </FormControl>

//               {/* 3 */}
//               <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
//               <ForgotPassword open={open} handleClose={handleClose} />

//               {/* Button */}
//               <Button type="submit" fullWidth variant="contained" onClick={validateInputs} >
//                 Sign in
//               </Button>

//               {/* Link */}
//               <Link component="button" type="button" onClick={handleClickOpen} variant="body2" sx={{ alignSelf: "center" }} >
//                 Forgot your password?
//               </Link>
//               {/* Box 1 Over Here */}
//             </Box>

//             <Divider>or</Divider>

//             {/* Box 2 */}
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

//               {/* Google Button */}
//               <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Google")} startIcon={<GoogleIcon />} >
//                 Sign in with Google
//               </Button>

//               {/* Facebook Button */}
//               <Button fullWidth variant="outlined" onClick={() => alert("Sign in with Facebook")} startIcon={<FacebookIcon />} >
//                 Sign in with Facebook
//               </Button>

//               {/* Message  */}
//               <Typography sx={{ textAlign: "center" }}> Don&apos;t have an account?{" "}

//                 {/* Registration Form Link Started */}
//                 <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
//                   Sign up
//                 </Link>
//                 {/* Registration Form Link Ended*/}

//               </Typography>

//             </Box>
//             {/* Box 2 Ended */}
//           </Card>
//         </SignInContainer>
//       </AppTheme >
//     </>
//   );
// };
