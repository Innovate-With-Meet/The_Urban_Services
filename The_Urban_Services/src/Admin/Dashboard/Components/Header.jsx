import * as React from "react";
import Stack from "@mui/material/Stack";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { CustomDatePicker } from "./CustomDatePicker";
import { NavbarBreadcrumbs } from "./NavbarBreadcrumbs";
import { MenuButton } from "./MenuButton";
// import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import ColorModeIconDropdown from "../../../shared-theme/ColorModeIconDropdown";

import { Search } from "./Search";

export const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs /> {/* the Navbar like Dashboard/ Home */}

      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        {/* The Search Bar,  Adding the Func to search the query */}

        <CustomDatePicker />
        {/* Calander */}

        <MenuButton showBadge aria-label="Open notifications">
          {/* add the notification func here */}
          <NotificationsRoundedIcon />
          {/* notification button */}
        </MenuButton>

        <ColorModeIconDropdown />
        {/* the light and dark theme functionality */}
      </Stack>
    </Stack>
  );
};
