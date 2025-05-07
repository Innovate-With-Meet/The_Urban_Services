import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ServiceDetails = () => {
    const location = useLocation(); // Access the passed state
    const navigate = useNavigate();
    const service = location.state; // Get the service data

    if (!service) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h5" color="error">
                    No service data available.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/services")}>
                    Back to Services
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#f5f5f5",
                    padding: { xs: 2, md: 4 },
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    mb: 4,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
                    {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", mt: 1 }}>
                    {service.details}
                </Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={() => navigate("/services")}>
                Back to Services
            </Button>
        </Container>
    );
};