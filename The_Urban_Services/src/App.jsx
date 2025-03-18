// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { SignUp } from "./Authentication/SignIn/SignUp";
import { Dire } from "./Components/Dire";
import { Time } from "./Components/Time";
import { Dashboard } from "./Admin/Dashboard/Dashboard";
import { Landing } from "./Landing";
import { Error } from "./Error";
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
import { BlogPage } from "../src/Blog/BlogPage";
import { TestCode } from "../src/TestCode";
function App() {
  return (
    <>
      <Dire> </Dire>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/BlogPage" element={<BlogPage />}></Route>
        <Route path="/TestCode" element={<TestCode />}></Route>


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
        <Route path="/Log_In" element={<Log_In />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>

        {/* authentication component */}


        <Route path="/Landing" element={<Landing />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
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
