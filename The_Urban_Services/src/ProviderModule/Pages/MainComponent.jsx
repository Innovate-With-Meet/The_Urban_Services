import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

export const MainComponent = () => {
    const providerFeatures = [
        {
            title: 'Service Requests',
            description: 'View and manage service requests from customers.',
            action: 'View Requests',
            path: '/provider/Services',
        },
        // {
        //     title: 'My Services',
        //     description: 'Add, update, or remove the services you offer.',
        //     action: 'Manage Services',
        //     path: '/provider/MyServices',
        // },
        {
            title: 'Activate Account',
            description: 'Activate Your Account And Notification From The Admin.',
            action: 'Manage Account',
            path: '/provider/ProfileRequest',
        },
        {
            title: 'Profile Settings',
            description: 'Update your profile and account settings.',
            action: 'Edit Profile',
            path: '/provider/ProfileSettings',
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                marginBottom: '20px',
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
                Provider Dashboard Overview
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', color: '#555', textAlign: 'center' }}>
                Welcome to the provider panel! Manage your services, view requests, and track your earnings to grow your business.
            </Typography>
            <Grid container spacing={3}>
                {providerFeatures.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    {feature.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => (window.location.href = feature.path)}
                                >
                                    {feature.action}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};