import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Collapse Toggle Button */}
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[100]}>
                ADMIN PANEL
              </Typography>
            )}
          </MenuItem>

          {/* Menu Items */}
          <MenuItem
            active={selected === "Dashboard"}
            icon={<LightModeOutlinedIcon />}
            onClick={() => setSelected("Dashboard")}
            component={<Link to="/" />}
          >
            Dashboard
          </MenuItem>

          <MenuItem
            active={selected === "Contacts"}
            icon={<ContactPhoneOutlinedIcon />}
            onClick={() => setSelected("Contacts")}
            component={<Link to="/contacts" />}
          >
            Contacts
          </MenuItem>

          <MenuItem
            active={selected === "Invoices"}
            icon={<ReceiptOutlinedIcon />}
            onClick={() => setSelected("Invoices")}
            component={<Link to="/invoices" />}
          >
            Invoices
          </MenuItem>

          <MenuItem
            active={selected === "Profile"}
            icon={<PersonOutlinedIcon />}
            onClick={() => setSelected("Profile")}
            component={<Link to="/profile" />}
          >
            Profile
          </MenuItem>

          <MenuItem
            active={selected === "Calendar"}
            icon={<CalendarTodayOutlinedIcon />}
            onClick={() => setSelected("Calendar")}
            component={<Link to="/calendar" />}
          >
            Calendar
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
