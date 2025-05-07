import React from "react";
import { Routes, Route } from "react-router-dom";
import { PlumbingService } from "./PlumbingService";
import { CleaningService } from "./CleaningService";
import { ElectricalService } from "./ElectricalService";

export const ServiceRoutes = () => {
    return (
        <Routes>
            <Route path="/plumbing" element={<PlumbingService />} />
            <Route path="/cleaning" element={<CleaningService />} />
            <Route path="/electrical" element={<ElectricalService />} />
        </Routes>
    );
};