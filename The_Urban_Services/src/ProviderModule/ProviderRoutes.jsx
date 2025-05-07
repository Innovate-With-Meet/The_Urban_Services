import React from "react";
import { Routes, Route } from "react-router-dom";
// import { AdminLanding } from "./AdminLanding";
import { ProfilePage } from "./Dashboard/ProfilePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProviderLanding } from "./ProviderLanding";
import { ProfileRequest } from "./Dashboard/ProfileRequest";
// import { AllUsers } from "./ManageUsers/AllUsers";
// import { AllProviderUsers } from "./ManageUsers/AllProviderUsers";
import { Services } from "./ManageService/Services";
// import { AnalyticsPage } from "./AnalyticsPage/AnalyticsPage";
// import { Setting } from "./SettingsModule/Setting";
// import { maincom } from "./maincom/maincom";

export const ProviderRoutes = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/ProviderLogIn"); // Redirect to login if no token
        }
    }, [navigate]);
    return (
        <Routes>
            <Route path="/" element={<ProviderLanding />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profilerequest" element={<ProfileRequest />} />

            {/* import this to landing page */}
            {/* <Route path="/latest" element={<Latest />} /> */}
            {/* <Route path="/maincom" element={<maincom />} /> */}
            {/* import this to landing page */}

            {/* <Route path="/allusers" element={<AllUsers />} />
            <Route path="/allproviderusers" element={<AllProviderUsers />} />
            <Route path="/analyticsPage" element={<AnalyticsPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/" element={<AdminLanding />} /> */}


        </Routes>
    );
};

