import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from "../shared-theme/AppTheme";
import { AppAppBar } from "../Blog/BlogComponent/AppAppBar";
import { MainContent } from "../Blog/BlogComponent/MainContent";
import { Latest } from "../Blog/BlogComponent/Latest";
import { Footer } from "../Blog/BlogComponent/Footer";
import { Navbar } from "../Layout/Navbar";


export const BlogPage = (props) => {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Navbar />
            {/* <AppAppBar /> */}
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>

                <MainContent />
                <Latest />
            </Container>
            <Footer />
        </AppTheme >
    );
};