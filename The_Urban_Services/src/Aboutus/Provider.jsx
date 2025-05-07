import React, { useState } from "react";
import { Container, Card, CardContent, Typography, Grid, Button, Avatar } from "@mui/material";
import { Navbar } from "../Layout/Navbar";
const mockProviders = [
    { id: 1, name: "John Doe", service: "Plumbing", email: "john@example.com", address: "New York, NY", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Jane Smith", service: "Electrician", email: "jane@example.com", address: "Los Angeles, CA", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Robert Brown", service: "Carpentry", email: "robert@example.com", address: "Chicago, IL", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Emily Davis", service: "Painting", email: "emily@example.com", address: "Houston, TX", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Michael Wilson", service: "Landscaping", email: "michael@example.com", address: "Phoenix, AZ", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Sarah Johnson", service: "Cleaning", email: "sarah@example.com", address: "Philadelphia, PA", avatar: "https://i.pravatar.cc/150?img=6" },
    { id: 7, name: "David Lee", service: "HVAC", email: "david@example.com", address: "San Antonio, TX", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: 8, name: "Laura Martinez", service: "Roofing", email: "laura@example.com", address: "San Diego, CA", avatar: "https://i.pravatar.cc/150?img=8" },
    { id: 9, name: "James Anderson", service: "Flooring", email: "james@example.com", address: "Dallas, TX", avatar: "https://i.pravatar.cc/150?img=9" },
    { id: 10, name: "Sophia Thomas", service: "Interior Design", email: "sophia@example.com", address: "San Jose, CA", avatar: "https://i.pravatar.cc/150?img=10" },
    { id: 11, name: "Daniel Garcia", service: "Appliance Repair", email: "daniel@example.com", address: "Austin, TX", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 12, name: "Olivia Martinez", service: "Pest Control", email: "olivia@example.com", address: "Jacksonville, FL", avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 13, name: "William Harris", service: "Security Systems", email: "william@example.com", address: "Fort Worth, TX", avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 14, name: "Isabella Clark", service: "Window Cleaning", email: "isabella@example.com", address: "Columbus, OH", avatar: "https://i.pravatar.cc/150?img=14" },
    { id: 15, name: "Ethan Lewis", service: "Moving Services", email: "ethan@example.com", address: "Charlotte, NC", avatar: "https://i.pravatar.cc/150?img=15" },
    { id: 16, name: "Mia Walker", service: "Handyman", email: "mia@example.com", address: "San Francisco, CA", avatar: "https://i.pravatar.cc/150?img=16" },
    { id: 17, name: "Alexander Hall", service: "Pool Maintenance", email: "alexander@example.com", address: "Indianapolis, IN", avatar: "https://i.pravatar.cc/150?img=17" },
    { id: 18, name: "Charlotte Young", service: "Gardening", email: "charlotte@example.com", address: "Seattle, WA", avatar: "https://i.pravatar.cc/150?img=18" },
];

export const Provider = () => {
    const [providers, setProviders] = useState(mockProviders);

    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
                    Registered Providers
                </Typography>
                <Grid container spacing={3}>
                    {providers.map((provider) => (
                        <Grid item xs={12} sm={6} md={4} key={provider.id}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    p: 2,
                                    borderRadius: 2,
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                        borderColor: "primary.main",
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Avatar
                                        src={provider.avatar}
                                        alt={provider.name}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            margin: "0 auto",
                                            mb: 2,
                                            boxShadow: 2,
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        {provider.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {provider.service}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        📧 {provider.email}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        📍 {provider.address}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2, textTransform: "none" }}
                                    >
                                        View Details
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