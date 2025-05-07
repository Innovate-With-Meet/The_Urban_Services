import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const Time = () => {
    // Check if countdown target exists, otherwise set it to 54 days from now
    let storedTarget = localStorage.getItem("countdownTarget");

    if (!storedTarget) {
        let targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 16);
        storedTarget = targetDate.getTime();
        localStorage.setItem("countdownTarget", storedTarget.toString());
    }

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = storedTarget - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        const timer = setInterval(updateTimer, 1000);
        updateTimer(); // Run immediately on mount

        return () => clearInterval(timer);
    }, [storedTarget]);

    return (
        <Box
            sx={{
                textAlign: "center",
                bgcolor: "#3674B5",
                color: "Yellow",
                p: 1,
                border: "1px solid #ddd",
                borderRadius: "10px",
                borderColor: "#FFF2F2",
                width: "130px",
                margin: "1px",
                mt: 3,
            }}
        >
            <Typography variant="h9" sx={{ mt: 1 }}>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
            </Typography>
        </Box>
    );
};

// test the commit