// // import React, { useState, useEffect } from "react";

// // export const Time = ({ countDownDate }) => {
// //   const [days, setDays] = useState(0);
// //   const [hours, setHours] = useState(0);
// //   const [minutes, setMinutes] = useState(0);
// //   const [seconds, setSeconds] = useState(0);

// //   useEffect(() => {
// //     const countDownDateMs = new Date(countDownDate).getTime();

// //     const interval = setInterval(() => {
// //       const now = new Date().getTime();
// //       const distance = countDownDateMs - now;

// //       const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
// //       const newHours = Math.floor(
// //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// //       );
// //       const newMinutes = Math.floor(
// //         (distance % (1000 * 60 * 60)) / (1000 * 60)
// //       );
// //       const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

// //       setDays(newDays);
// //       setHours(newHours);
// //       setMinutes(newMinutes);
// //       setSeconds(newSeconds);

// //       if (distance < 0) {
// //         clearInterval(interval);
// //         // Handle expiration (e.g., set a state variable)
// //       }
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, [countDownDate]);

// //   return (
// //     <>
// //       <span>
// //         {days}d {hours}h {minutes}m {seconds}s
// //       </span>{" "}
// //     </>
// //   );
// // };

// import React, { useState, useEffect } from "react";

// export const Time = ({ targetDate }) => {
//   // Renamed prop for clarity
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const targetDateMs = new Date(targetDate).getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime(); // Get current time in milliseconds
//       const distance = targetDateMs - now;

//       const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const newHours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const newMinutes = Math.floor(
//         (distance % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setDays(newDays);
//       setHours(newHours);
//       setMinutes(newMinutes);
//       setSeconds(newSeconds);

//       if (distance < 0) {
//         clearInterval(interval);
//         // Handle expiration (e.g., set a state variable)
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]); // Add targetDate to dependency array

//   return (
//     <span>
//       {days}d {hours}h {minutes}m {seconds}s
//     </span>
//   );
// };

// // const MyComponent = () => {
// //   const [currentTime, setCurrentTime] = useState(new Date()); // State for current time

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentTime(new Date()); // Update current time every second
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, []); // Empty dependency array ensures this runs only once

// //   const targetDate = "2030-01-05T15:30:00"; // Your target date

// //   return (
// //     <div>
// //       <p>Current Time: {currentTime.toLocaleString()}</p>{" "}
// //       {/* Display current time */}
// //       <Countdown targetDate={targetDate} />
// //     </div>
// //   );
// // };

// // export default MyComponent;

// import React from 'react'
// import React, { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";

// export const Time = () => {
//   const targetDate = new Date("2025-12-31T23:59:59");
//   targetDate.setDate(targetDate.getDate() + 1); // Set a valid date
//   const targetTime = targetDate.getTime();
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetTime - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         // ms, sec, min, hours = 1 day
//         hours: Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           // ms, sec, min, hours = 1 day /
//         ),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [targetTime]);

//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         bgcolor: "black",
//         p: 1,
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         width: "130px",
//         margin: "1px",
//         mt: 3,
//       }}
//     >
//       {/* <Typography variant="h9">Countdown Timer</Typography> */}
//       <Typography variant="h9" sx={{ mt: 1 }}>
//         {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
//         {timeLeft.seconds}s
//       </Typography>
//     </Box>
//   );
// };

// import { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";

// export const Time = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 312); // Set countdown to 312 days from today
//     const targetTime = targetDate.getTime();

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetTime - now;

//       if (distance <= 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         ),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, []); // Empty dependency array ensures the timer starts once

//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         bgcolor: "black",
//         p: 1,
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         width: "130px",
//         margin: "1px",
//         mt: 3,
//       }}
//     >
//       <Typography variant="h9" sx={{ mt: 1 }}>
//         {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
//         {timeLeft.seconds}s
//       </Typography>
//     </Box>
//   );
// };
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const Time = () => {
  // Check if countdown target exists, otherwise set it to 54 days from now
  let storedTarget = localStorage.getItem("countdownTarget");

  if (!storedTarget) {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 54);
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
        bgcolor: "#FBFFE4",
        color: "red",
        p: 1,
        border: "1px solid #ddd",
        borderRadius: "10px",
        borderColor: "red",
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