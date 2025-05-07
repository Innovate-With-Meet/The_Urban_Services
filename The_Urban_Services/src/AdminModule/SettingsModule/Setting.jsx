import React from "react";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Switch,
    FormControlLabel,
    Box,
} from "@mui/material";

export const Setting = () => {
    return (
        <Box sx={{ pt: 10, pb: 6, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Container maxWidth="md">
                {/* Page Title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    textAlign="center"
                    sx={{ fontWeight: "bold", color: "#1976d2", mb: 4 }}
                >
                    Admin Settings
                </Typography>

                <Grid container spacing={4}>
                    {/* Profile Information Section */}
                    <Grid item xs={12}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                    Profile Information
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Full Name"
                                            variant="outlined"
                                            fullWidth
                                            defaultValue="Admin User"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                            defaultValue="admin@urbanservices.com"
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ mt: 3, textAlign: "right" }}>
                                    <Button variant="contained" color="primary">
                                        Save Changes
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Change Password Section */}
                    <Grid item xs={12}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                    Change Password
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Current Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="New Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Confirm New Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ mt: 3, textAlign: "right" }}>
                                    <Button variant="contained" color="primary">
                                        Update Password
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Notification Preferences Section */}
                    <Grid item xs={12}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                    Notification Preferences
                                </Typography>
                                <FormControlLabel
                                    control={<Switch defaultChecked />}
                                    label="Receive Email Notifications"
                                />
                                <FormControlLabel
                                    control={<Switch />}
                                    label="Receive SMS Notifications"
                                />
                                <FormControlLabel
                                    control={<Switch defaultChecked />}
                                    label="Receive Push Notifications"
                                />
                                <Box sx={{ mt: 3, textAlign: "right" }}>
                                    <Button variant="contained" color="primary">
                                        Save Preferences
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};