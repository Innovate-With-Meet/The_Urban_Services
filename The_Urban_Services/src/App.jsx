import { SignIn } from "./Authentication/SignIn/SignIn";
import { SignUp } from "./Authentication/SignIn/SignUp";
import { Dire } from "./Components/Dire";
import { Time } from "./Components/Time";
import { Dashboard } from "./Admin/Dashboard/Dashboard";
import { Landing } from "./Landing";
import { Error } from "./Error";
import { Route, Routes } from "react-router-dom";
import { AuthenticationMenu } from "./Authentication/SignIn/AuthenticationMenu";
function App() {
  return (
    <>
      {/* <Dashboard></Dashboard> */}
      <Dire> </Dire>

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/AuthenticationMenu" element={<AuthenticationMenu />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>sdds
        <Route path="/Time" element={<Time />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
