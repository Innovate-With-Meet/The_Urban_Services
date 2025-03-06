// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import Link from "@mui/material/Link";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import MuiCard from "@mui/material/Card";
// import { styled } from "@mui/material/styles";
// import AppTheme from "../../shared-theme/AppTheme";
// import ColorModeSelect from "../../shared-theme/ColorModeSelect";
// import {
//   GoogleIcon,
//   FacebookIcon,
//   SitemarkIcon,
// } from "./Components/Customicons";

// const Card = styled(MuiCard)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   // alignSelf: "center",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "100%",

//   maxWidth: "450px", // Properly restrict width

//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: "auto",
//   boxShadow:
//     "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
//   [theme.breakpoints.up("sm")]: {
//     // width: "450px",
//   },
//   ...theme.applyStyles("dark", {
//     boxShadow:
//       "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
//   }),
// }));

// const SignUpContainer = styled(Stack)(({ theme }) => ({
//   height: "calc((1 - var(--template-frame-height, 0)) * 120vh auto)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "100vw", // Full viewport width
//   position: "relative",

//   minHeight: "100%",
//   padding: theme.spacing(2),
//   // [theme.breakpoints.up("sm")]: {
//   //   padding: theme.spacing(4),
//   // },
//   "&::before": {
//     content: '""',
//     display: "block",
//     position: "absolute",
//     zIndex: -1,
//     inset: 0,
//     backgroundImage:
//       "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
//     backgroundRepeat: "no-repeat",
//     ...theme.applyStyles("dark", {
//       backgroundImage:
//         "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
//     }),
//   },
// }));

// export const SignUp = (props) => {
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState("");
//   // Error handling For the State

//   const validateInputs = () => {
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const name = document.getElementById("name");
//     // May be Main Logic Here

//     let isValid = true;

//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//       setEmailError(true);
//       setEmailErrorMessage("Please enter a valid email address.");
//       isValid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage("");
//     }
//     // verification for the given input is valid or not for the email

//     if (!password.value || password.value.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage("Password must be at least 6 characters long.");
//       isValid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage("");
//     }
//     // verification for the given input is valid or not for the password

//     if (!name.value || name.value.length < 1) {
//       setNameError(true);
//       setNameErrorMessage("Name is required.");
//       isValid = false;
//     } else {
//       setNameError(false);
//       setNameErrorMessage("");
//     }
//     // verification for the given input is valid or not for the name

//     return isValid;
//   };

//   const handleSubmit = (event) => {
//     if (nameError || emailError || passwordError) {
//       event.preventDefault();
//       return;
//     }
//     // if emailerror or password error is true than prevent the form for submit

//     const data = new FormData(event.currentTarget);
//     console.log({
//       name: data.get("name"),
//       lastName: data.get("lastName"),
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//     // may be modify here add the data at here

//   };

//   return (
//     <AppTheme {...props}>

//       <CssBaseline enableColorScheme />{/*  UI-UX-Styling  */}
//       <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />

//       <SignUpContainer direction="column" justifyContent="space-between">
//         <Card variant="inlined">
//           {/*  UI-UX-Styling  */}

//           {/* Logo Of The Site */}
//           <SitemarkIcon />

//           {/* Sign Up Text */}
//           <Typography component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center", }} >
//             Sign up
//           </Typography>

//           {/* Box 1 Start Here */}
//           <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }} >

//             {/* 1 */}
//             <FormControl>
//               <FormLabel htmlFor="name">Full Name</FormLabel>
//               <TextField sx={{ width: "390px" }} autoComplete="name" name="name" required fullWidth id="name" placeholder="Jon Snow" error={nameError} helperText={nameErrorMessage} color={nameError ? "error" : "primary"} />
//             </FormControl>

//             {/* 2 */}
//             <FormControl>
//               <FormLabel htmlFor="email">Email</FormLabel>
//               <TextField required fullWidth id="email" placeholder="your@email.com" name="email" autoComplete="email" variant="outlined" error={emailError} helperText={emailErrorMessage} color={passwordError ? "error" : "primary"} />
//             </FormControl>

//             {/* 3 */}
//             <FormControl>
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <TextField required fullWidth name="password" placeholder="••••••" type="password" id="password" autoComplete="new-password" variant="outlined" error={passwordError} helperText={passwordErrorMessage} color={passwordError ? "error" : "primary"} />
//             </FormControl>

//             {/* 4 */}
//             <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive updates via email." />

//             {/* Button */}
//             <Button type="submit" fullWidth variant="contained" onClick={validateInputs} >
//               Sign up
//             </Button>

//           </Box>
//           {/* Box 1 Over Here */}

//           <Divider> <Typography sx={{ color: "text.secondary" }}>or</Typography> </Divider>

//           {/* Box 2 */}
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

//             {/* Google Button */}
//             <Button fullWidth variant="outlined" onClick={() => alert("Sign up with Google")} startIcon={<GoogleIcon />} >
//               Sign up with Google
//             </Button>

//             {/* Facebook Button */}
//             <Button fullWidth variant="outlined" onClick={() => alert("Sign up with Facebook")} startIcon={<FacebookIcon />} >
//               Sign up with Facebook
//             </Button>

//             <Typography sx={{ textAlign: "center" }}> Already have an account?{" "}
//               {/* Message  */}

//               {/* Login Form Link Started */}
//               <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
//                 Sign in
//               </Link>
//               {/* Login Form Link Ended */}

//             </Typography>
//           </Box>
//           {/* Box 2 Ended */}

//         </Card>
//       </SignUpContainer>
//     </AppTheme>
//   );
// };

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AppTheme from "../../shared-theme/AppTheme";
import ColorModeSelect from "../../shared-theme/ColorModeSelect";
import {
  GoogleIcon,
  FacebookIcon,
  SitemarkIcon,
} from "./Components/Customicons";
import axios from 'axios'; // Add this line

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
  [theme.breakpoints.up("sm")]: {
    // width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 120vh auto)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  position: "relative",
  minHeight: "100%",
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

export const SignUp = (props) => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name");

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

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await axios.post("http://localhost:8000/user", { name, email, password });
      console.log(response.data);
      // Handle successful registration (e.g., show success message, redirect)
    } catch (error) {
      console.error(error);
      // Handle registration error
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />

      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="inlined">
          <SitemarkIcon />
          <Typography component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center", }}>
            Sign up
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <TextField sx={{ width: "390px" }} autoComplete="name" name="name" required fullWidth id="name" placeholder="Jon Snow" error={nameError} helperText={nameErrorMessage} color={nameError ? "error" : "primary"} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField required fullWidth id="email" placeholder="your@email.com" name="email" autoComplete="email" variant="outlined" error={emailError} helperText={emailErrorMessage} color={passwordError ? "error" : "primary"} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField required fullWidth name="password" placeholder="••••••" type="password" id="password" autoComplete="new-password" variant="outlined" error={passwordError} helperText={passwordErrorMessage} color={passwordError ? "error" : "primary"} />
            </FormControl>

            <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive updates via email." />

            <Button type="submit" fullWidth variant="contained" onClick={validateInputs} >
              Sign up
            </Button>
          </Box>

          <Divider> <Typography sx={{ color: "text.secondary" }}>or</Typography> </Divider>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button fullWidth variant="outlined" onClick={() => alert("Sign up with Google")} startIcon={<GoogleIcon />} >
              Sign up with Google
            </Button>

            <Button fullWidth variant="outlined" onClick={() => alert("Sign up with Facebook")} startIcon={<FacebookIcon />} >
              Sign up with Facebook
            </Button>

            <Typography sx={{ textAlign: "center" }}> Already have an account?{" "}
              <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
};