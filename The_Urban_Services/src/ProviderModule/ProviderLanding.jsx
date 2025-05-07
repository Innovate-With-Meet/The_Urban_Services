import React from 'react'
import { Navbar } from './Layout/Navbar';
import { MainComponent } from './Pages/MainComponent';
import { Latest } from './Pages/Latest';
import { Footer } from './Layout/Footer';
import { Box } from '@mui/material';

export const ProviderLanding = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        mt: 3,
      }}
    >
      <Navbar />
      <Box sx={{ height: '64px' }} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <MainComponent />
        <Latest />
      </Box>
      <Footer
        sx={{
          backgroundColor: '#1976d2',
          color: '#ffffff',
          padding: '10px 20px',
          textAlign: 'center',
        }}
      />
    </Box>
  );
};
