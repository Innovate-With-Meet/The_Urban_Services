// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import { SignUp } from "./Authentication/SignIn/SignUp";
import { Dire } from "./Components/Dire";
import { Time } from "./Components/Time";
import { Dashboard } from "./Admin/Dashboard/Dashboard";
import { Error } from "./Components/Error";
import { Route, Routes } from "react-router-dom";
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
import { TestCode } from "../src/Components/TestCode";
import { AdminProfile } from "../src/Profiles/AdminProfile";
import { Contact } from "./Contact/Contact";
import { Aboutus } from "./Aboutus/Aboutus";
import { UserProfile } from "./Profiles/UserProfile";
import { ProviderProfile } from "./Profiles/ProviderProfile";
import { ProviderRequestPage } from "./Service-Provider/ProviderRequestPage";
// import { Logout } from "../src/Authentication/Logout";
function App() {
  return (
    <>
      <Dire> </Dire>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/BlogPage" element={<BlogPage />}></Route>
        <Route path="/TestCode" element={<TestCode />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/AdminProfile" element={<AdminProfile />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>


        {/* Profile */}
        {/* <Route path="Logout" element={<Logout />}></Route> */}

        <Route path="UserProfile" element={<UserProfile />}></Route>
        <Route path="ProviderProfile" element={<ProviderProfile />}></Route>


        {/* Profile */}

        {/* Profile */}

        <Route path="/ProviderRequestPage" element={<ProviderRequestPage />}></Route>

        {/* Profile */}




        {/* login module */}
        <Route path="/AdminLogIn" element={<AdminLogIn />}></Route>
        <Route path="/ProviderLogIn" element={<ProviderLogIn />}></Route>
        <Route path="/UserLogIn" element={<UserLogIn />}></Route>
        {/* login module */}

        {/* registration module */}
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        <Route path="/ProviderRegistration" element={<ProviderRegistration />}></Route>
        <Route path="/UserRegistration" element={<UserRegistration />}></Route>
        {/* registration module */}

        {/* authentication component */}
        {/* this is the MenuList Only */}
        <Route path="/Log_In" element={<Log_In />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>

        {/* authentication component */}


        <Route path="/Time" element={<Time />}></Route>
        <Route path="/" element={<Home />}></Route>
        {/* For The Default Page */}
        <Route path="*" element={<Error />}></Route>
        {/* For the Error Page */}


      </Routes>
    </>
  );
}

export default App;
