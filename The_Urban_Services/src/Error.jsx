import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} />
        </Box>
        <Typography variant="h4" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Container>
    </div>
  );
}