import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

export const PlumbingService = () => {
    return (
        <Box
            sx={{
                pt: 10,
                pb: 6,
                backgroundColor: "#f9f9f9",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    width: { xs: 350, sm: 500 }, // Responsive width
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                }}
            >
                {/* Online Image */}
                <CardMedia
                    component="img"
                    height="250"
                    image="https://www.plumbingsupply.com/images/plumbing-services.jpg"
                    alt="Plumbing Service"
                />
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
                        Professional Plumbing Services
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
                        Our professional plumbing services include fixing leaks, unclogging drains, installing fixtures,
                        and more. We ensure high-quality service with experienced professionals to meet all your
                        plumbing needs.
                    </Typography>

                    {/* Service Details */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Price:
                            </Typography>
                            <Typography variant="body2">$50 - $200 (depending on the service)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Availability:
                            </Typography>
                            <Typography variant="body2">Monday - Saturday, 9:00 AM - 6:00 PM</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Key Features:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Experienced and certified plumbers" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Quick response and on-time service" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Affordable pricing with no hidden charges" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Wide range of plumbing solutions" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    {/* Action Buttons */}
                    <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                        <Button variant="contained" color="primary">
                            Book Now
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Contact Us
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};