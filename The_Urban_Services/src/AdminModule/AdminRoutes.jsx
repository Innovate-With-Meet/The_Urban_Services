import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLanding } from "./AdminLanding";
import { ProfilePage } from "./Dashboard/ProfilePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllUsers } from "./ManageUsers/AllUsers";
import { AllProviderUsers } from "./ManageUsers/AllProviderUsers";
import { Services } from "./ManageServices/Services";
import { AnalyticsPage } from "./AnalyticsPage/AnalyticsPage";
import { Setting } from "./SettingsModule/Setting";
export const AdminRoutes = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/AdminLogIn"); // Redirect to login if no token
        }
    }, [navigate]);
    return (
        <Routes>
            <Route path="/" element={<AdminLanding />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/allproviderusers" element={<AllProviderUsers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/analyticsPage" element={<AnalyticsPage />} />
            <Route path="/setting" element={<Setting />} />


        </Routes>
    );
};

