import { Navbar } from "./Layout/Navbar";
import { Time } from "./Layout/Time";
import { Provider } from "./Aboutus/Provider";
import { Dashboard } from "./Admin/Dashboard/Dashboard";
import { Error } from "./Layout/Error";
import { AdminLogIn } from "./Authentication/SignIn/Admin/AdminLogIn";
import { ProviderLogIn } from "./Authentication/SignIn/Provider/ProviderLogin"
import { UserLogIn } from "./Authentication/SignIn/End-User/UserLogIn"
import { Log_In } from "./Authentication/SignIn/Log_In";
import { AdminRegistration } from "./Authentication/SignIn/Admin/AdminRegistration";
import { ProviderRegistration } from "./Authentication/SignIn/Provider/ProviderRegistration";
import { UserRegistration } from "./Authentication/SignIn/End-User/UserRegistration";
import { Registration } from "./Authentication/SignIn/Registration";
import { Home } from "./Hero/Home";
import { Services } from "./Services/Services";
import { BlogPage } from "../src/Blog/BlogPage";
import { TestGroundCode } from "../src/CodeTestGround/TestGroundCode";
// import { AdminRoutes } from "./AdminModule/Routes/AdminRoutes";
import { AdminProfile } from "../src/Profiles/AdminProfile";
import { Contact } from "../src/Contact";
import { Aboutus } from "./Aboutus/Aboutus";
import { UserProfile } from "./Profiles/UserProfile";
// import { UserProfile } from "./UserProfile/UserProfile";
import { useLocation } from "react-router-dom";
import { ProviderProfile } from "./Profiles/ProviderProfile";
import { ProviderRequestPage } from "./Service-Provider/ProviderRequestPage";
// import { Logout } from "../src/Authentication/Logout";
import { AdminLanding } from "./AdminModule/AdminLanding";
import { ProfilePage } from "./AdminModule/Dashboard/ProfilePage";
// import { Login } from "./AdminModule/Login";
// import { Logout } from "./AdminModule/Logout";
// import { useEffect } from "react";
// import { gapi } from "gapi-script";
// import { GoogleLogin, GoogleOAuthenProvider } from '@react-oauth/google';
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { PlumbingService } from "./Services/PlumbingService";
import { CleaningService } from "./Services/CleaningService";
import { ElectricalService } from "./Services/ElectricalService";
import { ServiceRoutes } from "./Services/ServiceRoutes"; // Import ServiceRoutes
import { Route, Routes } from "react-router-dom";
import { AdminRoutes } from "./AdminModule/AdminRoutes";
import { ProviderRoutes } from "./ProviderModule/ProviderRoutes";
// const clientId = "573033535650-771jdbgmfa7qck5ni99lg5n96rp7k01v.apps.googleusercontent.com";
// import { ServiceRoutes } from "./Services/ServiceRoutes";
// import { ServicesConfirm } from "./ServiceConfirm/ServicesConfirm";

function App() {
  // const location = useLocation();
  // const path = location.pathname;

  // const showNavbar = [
  //   "/",
  //   "/Dashboard",
  //   "/BlogPage",
  //   "/TestGroundCode",
  //   "/Services",
  //   "/Contact",
  //   "/Aboutus",
  //   "/UserProfile"
  // ].includes(path);
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ''
  //     })
  //   };
  //   gapi.load('client:auth2', start);
  // });

  return (
    <>
      {/* <div className="App">
        <Login />
        <Logout />

      </div> */}
      {/* <GoogleOAuthProvider clientId={clientId}>
        <Login />
      </GoogleOAuthProvider> */}
      {/* <BrowserRouter> */}
      {/* {showNavbar && <Navbar />} */}

      {/* u need to add the com to coomon to go the users */}
      {/* <Navbar> </Navbar> */}
      {/* <Navbar /> */}
      {/*  In Temporary Navbar is defined in every component */}
      <Routes>
        {/* =====================================================================User Module================================================================== */}
        {/* <Route path="/Navbar" element={<Navbar />}></Route> */}
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/BlogPage" element={<BlogPage />}></Route>
        <Route path="/TestGroundCode" element={<TestGroundCode />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/UserProfile" element={<UserProfile />}></Route>

        <Route path="/PlumbingService" element={<PlumbingService />}></Route>
        <Route path="/CleaningService" element={<CleaningService />}></Route>
        <Route path="/ElectricalService" element={<ElectricalService />}></Route>
        {/* <Route path="/ServicesConfirm" element={<ServicesConfirm />}></Route> */}

        {/* =====================================================================User Module================================================================== */}





        {/* =====================================================================Admin Module================================================================== */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/provider/*" element={<ProviderRoutes />} />
        <Route path="/services/*" element={<ServiceRoutes />} /> {/* Use ServiceRoutes here */}


        {/* <Route path="AdminLanding" element={<AdminLanding />} />
        <Route path="AdminLanding/ProfilePage" element={<ProfilePage />}></Route> */}
        {/* <Route path="AdminProfile" element={<AdminProfile />}></Route> */}


        {/* =====================================================================Admin Module================================================================== */}





        {/* <Route path="Logout" element={<Logout />}></Route> */}

        {/* The End User Module After Redirect by Login From Main Components*/}
        {/* redirect to user profile */}



        {/* =====================================================================PROVIDER MODULE================================================================== */}
        {/* The Provider Module After Redirect by Login From Main Components */}
        <Route path="ProviderProfile" element={<ProviderProfile />}></Route>
        {/* <Route path="Provider" element={<Provider />}></Route> */}
        <Route path="/ProviderRequestPage" element={<ProviderRequestPage />}></Route>
        {/* The Provider Module After Redirect by Login From Main Components */}
        {/* =====================================================================PROVIDER MODULE================================================================== */}











        {/* ========================================================Menu List=================================================== */}
        {/* login module Menu List*/}
        {/* this might be add to navbar components */}
        <Route path="/AdminLogIn" element={<AdminLogIn />}></Route>
        <Route path="/ProviderLogIn" element={<ProviderLogIn />}></Route>
        <Route path="/UserLogIn" element={<UserLogIn />}></Route>

        {/* <GoogleOAuthProvider clientId="573033535650-771jdbgmfa7qck5ni99lg5n96rp7k01v.apps.googleusercontent.com">
          <Route path="/UserLogIn" element={<UserLogIn />}></Route>
        </GoogleOAuthProvider> */}
        {/*<Route path="/UserLogIn" element={<UserLogIn />}></Route>*/}
        {/* this might be add to navbar components */}
        {/* login module */}
        {/* ========================================================Menu List=================================================== */}

        {/* ========================================================Menu List=================================================== */}
        {/* registration module Menu List*/}
        {/* this might be add to navbar components */}
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        <Route path="/ProviderRegistration" element={<ProviderRegistration />}></Route>
        <Route path="/UserRegistration" element={<UserRegistration />}></Route>
        {/* this might be add to navbar components */}
        {/* registration module */}
        {/* ========================================================Menu List=================================================== */}



        {/* ========================================================Error And Landing Page=================================================== */}
        <Route path="/" element={<Home />}></Route> {/* For The Landing Page */}
        <Route path="*" element={<Error />}></Route> {/* For the Error Page */}
        {/* ========================================================Error And Landing Page=================================================== */}



      </Routes>
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;
