import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Avatar, Card, CardContent, Container, Grid, Typography,
    Box, Divider, Button, TextField, CircularProgress, Alert
} from "@mui/material";
import { Navbar } from "../Layout/Navbar";

export const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [message, setMessage] = useState("");
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [status, setStatus] = useState("Active");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setError("No token found. Redirecting to login...");
                setLoading(false);
                navigate("/UserLogIn");
                return;
            }

            try {
                const response = await axios.get("http://localhost:8000/user/profile/", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const userData = response.data.user;
                setUser(userData);
                setAddress(userData.address || "");
                setPreview(userData.profile_image || "");
                setStatus(userData.status || "Active");
            } catch (err) {
                setError(err.response?.data?.detail || "Failed to fetch profile.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleProfileUpdate = async () => {
        const token = localStorage.getItem("authToken");
        const formData = new FormData();

        formData.append("address", address);
        formData.append("status", status);
        if (image) formData.append("image", image);

        try {
            await axios.put("http://localhost:8000/user/profile/update/", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage("Profile updated successfully!");
            setIsEditingAddress(false);
        } catch (err) {
            setMessage("Failed to update profile.");
        }
    };

    const handleToggleStatus = async () => {
        const newStatus = status === "Active" ? "Inactive" : "Active";
        setStatus(newStatus);
        await handleProfileUpdate();
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/UserLogIn");
    };

    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                <Container maxWidth="md">
                    <Card elevation={5}>
                        {loading ? (
                            <Box sx={{ py: 10, textAlign: "center" }}>
                                <CircularProgress />
                            </Box>
                        ) : error ? (
                            <Alert severity="error" sx={{ m: 3 }}>{error}</Alert>
                        ) : (
                            <CardContent>
                                {/* PROFILE HEADER */}
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                        <Box sx={{ position: "relative", width: 120, height: 120, margin: "0 auto" }}>
                                            <label htmlFor="profile-image-upload">
                                                <Avatar
                                                    alt={user?.name}
                                                    src={preview || "https://via.placeholder.com/150"}
                                                    sx={{ width: 120, height: 120, cursor: "pointer", boxShadow: 3 }}
                                                />
                                                <input
                                                    id="profile-image-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        </Box>

                                        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                                            {user?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            User
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={8}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Typography variant="body1">
                                                    <strong>Email:</strong> {user?.email}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="body1">
                                                    <strong>Address:</strong> {address || "N/A"}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1">
                                                    <strong>Status:</strong>{" "}
                                                    <span style={{
                                                        color: status === "Active" ? "green" : "red",
                                                        fontWeight: "bold"
                                                    }}>
                                                        {status}
                                                    </span>
                                                </Typography>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={handleToggleStatus}
                                                    sx={{ mt: 1, textTransform: "none" }}
                                                >
                                                    {status === "Active" ? "Deactivate" : "Activate"}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* DIVIDER */}
                                <Box my={4}>
                                    <Divider />
                                </Box>

                                {/* UPDATE SECTION */}
                                <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                                    Update Profile
                                </Typography>

                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={9}>
                                        <TextField
                                            label="Address"
                                            fullWidth
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            InputProps={{ readOnly: !isEditingAddress }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            color="primary"
                                            onClick={() => setIsEditingAddress(true)}
                                            disabled={isEditingAddress}
                                            sx={{ textTransform: "none" }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                </Grid>

                                {isEditingAddress && (
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleProfileUpdate}
                                        sx={{ mt: 2, textTransform: "none" }}
                                    >
                                        Save Changes
                                    </Button>
                                )}

                                {message && (
                                    <Typography
                                        sx={{
                                            mt: 2,
                                            color: message.includes("successfully") ? "green" : "red",
                                            textAlign: "center",
                                        }}
                                    >
                                        {message}
                                    </Typography>
                                )}

                                {/* LOGOUT */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleLogout}
                                        sx={{ textTransform: "none" }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </CardContent>
                        )}
                    </Card>
                </Container>
            </Box>
        </>
    );
};
