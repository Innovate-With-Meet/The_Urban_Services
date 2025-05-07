import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const PlumbingService = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleConfirmService = () => {
        // Dispatch a custom event with only the service name
        const event = new CustomEvent("serviceConfirmed", {
            detail: {
                name: "Plumbing Service", // Only the service name
            },
        });
        window.dispatchEvent(event);

        alert("Plumbing Service has been added to Admin's Manage Services!");

        // Redirect to the Admin's Services page
        navigate("/admin/Services");
    };

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
                    width: { xs: 350, sm: 500 },
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                }}
            >
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

                    {/* Action Buttons */}
                    <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleConfirmService} // Call the confirm service handler
                        >
                            Confirm Service
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => alert("Contact us for more details!")} // Show a contact alert
                        >
                            Contact Us
                        ?</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};