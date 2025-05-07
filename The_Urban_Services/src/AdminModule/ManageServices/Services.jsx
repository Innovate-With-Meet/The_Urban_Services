import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

export const Services = () => {
    // State to manage the list of services
    const [services, setServices] = useState([
        { id: 1, name: "Electrical Service" },
        { id: 2, name: "Cleaning Service" },
    ]);

    // Listen for the custom event and update the services list
    useEffect(() => {
        const handleServiceConfirmed = (event) => {
            setServices((prevServices) => [
                ...prevServices,
                { id: prevServices.length + 1, name: event.detail.name }, // Add only the service name
            ]);
        };

        window.addEventListener("serviceConfirmed", handleServiceConfirmed);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("serviceConfirmed", handleServiceConfirmed);
        };
    }, []);

    return (
        <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#1976d2",
                }}
            >
                Manage Services
            </Typography>

            {/* Services Table */}
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#1976d2" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Service Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service.id}>
                                <TableCell>{service.id}</TableCell>
                                <TableCell>{service.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};