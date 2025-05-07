// import React, { useEffect, useState } from "react";
// import {
//     Container,
//     Typography,
//     Grid,
//     Card,
//     CardContent,
//     CircularProgress,
//     Box,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { Navbar } from "../Layout/Navbar";

// export const AnalyticsPage = () => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [analyticsData, setAnalyticsData] = useState({
//         profitLoss: { profit: 0, loss: 0 },
//         userStats: { totalUsers: 0, activeUsers: 0, inactiveUsers: 0 },
//         servicePerformance: [],
//     });

//     // Fetch analytics data
//     useEffect(() => {
//         const fetchAnalyticsData = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 const response = await fetch("http://localhost:8000/admin/analytics", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch analytics data");
//                 }

//                 const data = await response.json();
//                 setAnalyticsData(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalyticsData();
//     }, []);

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" mt={4}>
//                 <CircularProgress color="primary" />
//             </Box>
//         );
//     }

//     if (error) {
//         return (
//             <Container maxWidth="md" sx={{ mt: 4 }}>
//                 <Typography variant="h5" color="error">
//                     {error}
//                 </Typography>
//             </Container>
//         );
//     }

//     return (
//         <>
//             <Navbar />
//             <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//                 <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: "bold", color: "#1976d2" }}>
//                     Admin Analytics Dashboard
//                 </Typography>

//                 <Grid container spacing={4}>
//                     {/* Profit and Loss Section */}
//                     <Grid item xs={12} md={6}>
//                         <Card>
//                             <CardContent>
//                                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//                                     Profit and Loss Analysis
//                                 </Typography>
//                                 <Typography variant="body1" sx={{ mb: 1 }}>
//                                     <strong>Profit:</strong> ${analyticsData.profitLoss.profit.toLocaleString()}
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     <strong>Loss:</strong> ${analyticsData.profitLoss.loss.toLocaleString()}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>

//                     {/* User Statistics Section */}
//                     <Grid item xs={12} md={6}>
//                         <Card>
//                             <CardContent>
//                                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//                                     User Statistics
//                                 </Typography>
//                                 <Typography variant="body1" sx={{ mb: 1 }}>
//                                     <strong>Total Users:</strong> {analyticsData.userStats.totalUsers}
//                                 </Typography>
//                                 <Typography variant="body1" sx={{ mb: 1 }}>
//                                     <strong>Active Users:</strong> {analyticsData.userStats.activeUsers}
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     <strong>Inactive Users:</strong> {analyticsData.userStats.inactiveUsers}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>

//                     {/* Service Performance Section */}
//                     <Grid item xs={12}>
//                         <Card>
//                             <CardContent>
//                                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//                                     Service Performance
//                                 </Typography>
//                                 <ResponsiveContainer width="100%" height={300}>
//                                     <BarChart data={analyticsData.servicePerformance}>
//                                         <XAxis dataKey="serviceName" />
//                                         <YAxis />
//                                         <Tooltip />
//                                         <Legend />
//                                         <Bar dataKey="revenue" fill="#4caf50" name="Revenue" />
//                                         <Bar dataKey="requests" fill="#2196f3" name="Requests" />
//                                     </BarChart>
//                                 </ResponsiveContainer>
//                             </CardContent>
//                         </Card>
//                     </Grid>

//                     {/* Detailed Service Table */}
//                     <Grid item xs={12}>
//                         <Card>
//                             <CardContent>
//                                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//                                     Detailed Service Performance
//                                 </Typography>
//                                 <TableContainer component={Paper}>
//                                     <Table>
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell sx={{ fontWeight: "bold" }}>Service Name</TableCell>
//                                                 <TableCell sx={{ fontWeight: "bold" }}>Revenue</TableCell>
//                                                 <TableCell sx={{ fontWeight: "bold" }}>Requests</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             {analyticsData.servicePerformance.map((service, index) => (
//                                                 <TableRow key={index}>
//                                                     <TableCell>{service.serviceName}</TableCell>
//                                                     <TableCell>${service.revenue.toLocaleString()}</TableCell>
//                                                     <TableCell>{service.requests}</TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </>
//     );
// };

import React from "react";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Navbar } from "../Layout/Navbar";

export const AnalyticsPage = () => {
    // Dummy data for analytics
    const analyticsData = {
        profitLoss: { profit: 50000, loss: 10000 },
        userStats: { totalUsers: 1000, activeUsers: 800, inactiveUsers: 200 },
        servicePerformance: [
            { serviceName: "Plumbing", revenue: 20000, requests: 150 },
            { serviceName: "Electrical", revenue: 15000, requests: 120 },
            { serviceName: "Cleaning", revenue: 10000, requests: 80 },
            { serviceName: "Landscaping", revenue: 5000, requests: 50 },
        ],
        monthlyRevenue: [
            { month: "January", revenue: 8000 },
            { month: "February", revenue: 12000 },
            { month: "March", revenue: 15000 },
            { month: "April", revenue: 10000 },
        ],
    };

    const COLORS = ["#4caf50", "#2196f3", "#ff9800", "#e91e63"];

    const handleExportData = () => {
        alert("Exporting data...");
    };

    const handleRefreshAnalytics = () => {
        alert("Refreshing analytics...");
    };

    return (
        <Box>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <Box sx={{ pt: 13, pb: 6, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <Container maxWidth="lg">
                    {/* Page Title */}
                    <Typography
                        variant="h4"
                        gutterBottom
                        textAlign="center"
                        sx={{ fontWeight: "bold", color: "#1976d2", mb: 4 }}
                    >
                        Admin Analytics Dashboard
                    </Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
                        <Button variant="contained" color="primary" onClick={handleExportData}>
                            Export Data
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleRefreshAnalytics}>
                            Refresh Analytics
                        </Button>
                    </Box>

                    <Grid container spacing={4}>
                        {/* Profit and Loss Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Profit and Loss Analysis
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        <strong>Profit:</strong> ${analyticsData.profitLoss.profit.toLocaleString()}
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Loss:</strong> ${analyticsData.profitLoss.loss.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* User Statistics Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        User Statistics
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        <strong>Total Users:</strong> {analyticsData.userStats.totalUsers}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        <strong>Active Users:</strong> {analyticsData.userStats.activeUsers}
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Inactive Users:</strong> {analyticsData.userStats.inactiveUsers}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Service Performance Section */}
                        <Grid item xs={12}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Service Performance
                                    </Typography>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={analyticsData.servicePerformance}>
                                            <XAxis dataKey="serviceName" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="revenue" fill="#4caf50" name="Revenue" />
                                            <Bar dataKey="requests" fill="#2196f3" name="Requests" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Monthly Revenue Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Monthly Revenue
                                    </Typography>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={analyticsData.monthlyRevenue}
                                                dataKey="revenue"
                                                nameKey="month"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                fill="#8884d8"
                                                label
                                            >
                                                {analyticsData.monthlyRevenue.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Top Performing Services Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Top Performing Services
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: "bold" }}>Service Name</TableCell>
                                                    <TableCell sx={{ fontWeight: "bold" }}>Revenue</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {analyticsData.servicePerformance
                                                    .sort((a, b) => b.revenue - a.revenue)
                                                    .slice(0, 3)
                                                    .map((service, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{service.serviceName}</TableCell>
                                                            <TableCell>${service.revenue.toLocaleString()}</TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Detailed Service Table */}
                        <Grid item xs={12}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Detailed Service Performance
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: "bold" }}>Service Name</TableCell>
                                                    <TableCell sx={{ fontWeight: "bold" }}>Revenue</TableCell>
                                                    <TableCell sx={{ fontWeight: "bold" }}>Requests</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {analyticsData.servicePerformance.map((service, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{service.serviceName}</TableCell>
                                                        <TableCell>${service.revenue.toLocaleString()}</TableCell>
                                                        <TableCell>{service.requests}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};