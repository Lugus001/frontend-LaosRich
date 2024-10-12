import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-pro-sidebar/dist/css/styles.css";
import DashboardIcon from "../../assets/icon/dashIcon.svg";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import loaluay from "../../assets/logo/loaluay.png";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    setSelected(path);
    navigate(path);
  };

  return (
    <Box className="min-h-full bg-slate-800">
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className="min-h-full bg-slate-800">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className="mt-[10px] mb-[20px]"
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img src={loaluay} alt="Logo" className="w-[35px]" />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon className="text-white" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Typography className="text-white"> MENU</Typography>

              <MenuItem
                icon={<img src={DashboardIcon} alt="dashboard" />}
                active={selected === "Dashboard"} 
                onClick={() => handleMenuItemClick("/")} 
              >
                Dashboard
              </MenuItem>

              <MenuItem
                icon={<Inventory2OutlinedIcon />}
                active={selected === "Shop"}
                onClick={() => handleMenuItemClick("/shop")}
              >
                รายงานการขาย
              </MenuItem>

              

              <MenuItem
                icon={<PeopleAltOutlinedIcon />}
                active={selected === "Member"}
                onClick={() => handleMenuItemClick("/member")}
              >
                สมาชิก
              </MenuItem>
              <MenuItem
                icon={<SettingsOutlinedIcon />}
                active={selected === "Settings"}
                onClick={() => handleMenuItemClick("/settings")}
              >
                Settings
              </MenuItem>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
