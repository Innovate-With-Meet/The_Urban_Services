import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import { Navbar } from "../Layout/Navbar"; // Import Navbar
import { PlumbingService } from "./PlumbingService";


// Sample service data with icons
const services = [
    {
        id: 1,
        title: "Plumbing Services",
        image: "https://images.pexels.com/photos/4388597/pexels-photo-4388597.jpeg",
        description: "Providing expert plumbing solutions for residential and commercial needs.",
        icon: <HomeRepairServiceIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
        path: "/PlumbingService",
    },
    {
        id: 2,
        title: "Cleaning Services",
        image: "https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg",
        description: "Providing spotless cleaning solutions for homes and offices.",
        icon: <CleaningServicesIcon sx={{ fontSize: 40, color: "#009688" }} />,
        path: "/cleaning",
    },
    {
        id: 3,
        title: "Electrical Services",
        image: "https://images.pexels.com/photos/5864478/pexels-photo-5864478.jpeg",
        description: "Powering homes and businesses with safe and reliable electrical solutions.",
        icon: <ElectricalServicesIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
        path: "/electrical",
    },
];

export const Services = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLearnMore = (path) => {
        navigate(path); // Navigate to the respective service page
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* Styled Box for "Our Services" Heading */}
                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#f5f5f5", // Light gray background
                        padding: { xs: 2, md: 4 }, // Responsive padding
                        borderRadius: "12px", // Rounded corners
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
                        mb: 4, // Margin below the box
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "#333",
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#555",
                            mt: 1,
                        }}
                    >
                        Explore our wide range of professional services tailored to meet your needs.
                    </Typography>
                </Box>

                {/* Grid Layout for Services */}
                <Grid container spacing={4}>
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={4} key={service.id}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    transition: "0.3s",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                    "&:hover": { transform: "scale(1.05)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={service.image}
                                    alt={service.title}
                                    sx={{
                                        borderTopLeftRadius: "12px",
                                        borderTopRightRadius: "12px",
                                    }}
                                />

                                <CardContent>
                                    {/* Icon + Title */}
                                    <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
                                        {service.icon}
                                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                                            {service.title}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                        {service.description}
                                    </Typography>

                                    {/* Learn More Button */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{
                                            textTransform: "none",
                                            fontWeight: "bold",
                                        }}
                                        onClick={() => handleLearnMore(service.path)} // Navigate to the service page
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};
