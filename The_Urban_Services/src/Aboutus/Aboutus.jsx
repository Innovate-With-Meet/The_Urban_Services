import React from "react";
import { Container, Typography, Grid, Paper, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';
import { Navbar } from "../Layout/Navbar";
const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", image: "https://i.pravatar.cc/200?img=1" },
    { name: "Sarah Smith", role: "Operations Manager", image: "https://i.pravatar.cc/200?img=2" },
    { name: "David Johnson", role: "Technical Head", image: "https://i.pravatar.cc/200?img=3" },
    { name: "Emily Brown", role: "Customer Support", image: "https://i.pravatar.cc/200?img=4" },
];

export const Aboutus = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: { xs: 3, md: 5 },
                        borderRadius: "12px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Page Title */}
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#333",
                            textTransform: "uppercase",
                            mb: 3,
                        }}
                    >
                        About Urban Services
                    </Typography>

                    {/* Introduction */}
                    <Typography
                        variant="body1"
                        align="center"
                        paragraph
                        sx={{
                            color: "#555",
                            maxWidth: "800px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                        }}
                    >
                        Urban Services is your trusted partner for home and business service solutions.
                        We specialize in plumbing, electrical work, cleaning, and appliance repair,
                        ensuring quality service with trained professionals.
                    </Typography>

                    {/* Mission, Vision & Values */}
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        {[
                            {
                                title: "Our Mission",
                                description: "To provide top-notch urban services with professionalism and efficiency.",
                            },
                            {
                                title: "Our Vision",
                                description: "Transforming urban services through innovation and customer satisfaction.",
                            },
                            {
                                title: "Our Values",
                                description: "Reliability, Excellence, Transparency, and Customer Focus.",
                            },
                        ].map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        borderRadius: "12px",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#333",
                                            mb: 1,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#555" }}>
                                        {item.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Why Choose Us Section */}
                    <Box sx={{ mt: 5, textAlign: "center" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#333",
                                mb: 3,
                            }}
                        >
                            Why Choose Us?
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {[
                                {
                                    icon: <VerifiedIcon sx={{ fontSize: 50, color: "#4caf50" }} />, // Green Verified Icon
                                    title: "Skilled & Verified Professionals",
                                    description: "Our team consists of highly skilled and verified professionals to ensure top-quality service.",
                                },
                                {
                                    icon: <AttachMoneyIcon sx={{ fontSize: 50, color: "#ff9800" }} />, // Orange Money Icon
                                    title: "Affordable & Transparent Pricing",
                                    description: "We offer competitive pricing with no hidden charges, ensuring complete transparency.",
                                },
                                {
                                    icon: <BoltIcon sx={{ fontSize: 50, color: "#2196f3" }} />, // Blue Bolt Icon
                                    title: "Fast & Reliable Service and More Thing.",
                                    description: "We prioritize your time and deliver fast, reliable services whenever you need them.",
                                },
                                {
                                    icon: <StarIcon sx={{ fontSize: 50, color: "#fbc02d" }} />, // Yellow Star Icon
                                    title: "Customer Satisfaction Guarantee",
                                    description: "Your satisfaction is our priority, and we go the extra mile to ensure it.",
                                },
                            ].map((item, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            textAlign: "center",
                                            borderRadius: "12px",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                            },
                                        }}
                                    >
                                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                                mb: 1,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#555",
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* Team Section */}
                    <Box sx={{ mt: 5 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#333",
                                mb: 3,
                                textAlign: "center",
                            }}
                        >
                            Meet Our Team
                        </Typography>
                        <Grid container spacing={4}>
                            {teamMembers.map((member, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card
                                        sx={{
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                            },
                                        }}
                                    >
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                                            <Avatar
                                                src={member.image}
                                                alt={member.name}
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    border: "3px solid #f5f5f5",
                                                }}
                                            />
                                        </Box>
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                }}
                                            >
                                                {member.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#555",
                                                }}
                                            >
                                                {member.role}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};