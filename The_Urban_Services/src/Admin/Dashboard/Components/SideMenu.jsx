import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SelectContent } from "./SelectContent";
import { MenuContent } from "./MenuContent";
import { CardAlert } from "./CardAlert";
import { NavbarBreadcrumbs } from "./OptionsMenu";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: open ? drawerWidth : 0,
  flexShrink: 0,
  boxSizing: "border-box",
  [`& .${drawerClasses.paper}`]: {
    width: open ? drawerWidth : 0,
    boxSizing: "border-box",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  },
}));

export const SideMenu = () => {
  const [open, setOpen] = React.useState(true); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setOpen(!open); // Toggle the sidebar state
  };

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "absolute",
          top: 16,
          left: open ? drawerWidth + 16 : 16,
          zIndex: 1201,
          backgroundColor: "background.paper",
          boxShadow: 1,
        }}
      >
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", md: "block" },
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: "calc(var(--template-frame-height, 0px) + 4px)",
            p: 1.5,
          }}
        >
          <SelectContent />
        </Box>
        <Divider />
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuContent />
          <CardAlert />
        </Box>
        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            alignItems: "center",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Avatar
            sizes="small"
            alt="Riley Carter"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36 }}
          />
          <Box sx={{ mr: "auto" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: "16px" }}
            >
              Riley Carter
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              riley@email.com
            </Typography>
          </Box>
          <NavbarBreadcrumbs />
        </Stack>
      </Drawer>
    </>
  );
};
