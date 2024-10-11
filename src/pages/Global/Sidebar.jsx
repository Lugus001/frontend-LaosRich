import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"; 
import "react-pro-sidebar/dist/css/styles.css";
import DashboardIcon from '../../assets/icon/dashIcon.svg';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import Logo from '../../assets/logo/logo.svg';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box className='min-h-full bg-slate-800'>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className='min-h-full bg-slate-800'>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className='mt-[10px] mb-[20px]'
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img src={Logo} alt="Logo" className="w-[35px]" />
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
            
                to="/" 
                icon={<img src={DashboardIcon} alt="dashboard" />}
                selected={selected}
                setSelected={setSelected}
              >
                Dashboard
              </MenuItem>

              <MenuItem
                to="/shop" 
                icon={<Inventory2OutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                ร้านค้าตนเอง
              </MenuItem>

              <MenuItem
                
                to="/order"
                icon={<TaskOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                >
                คำสั่งซื้อ
              </MenuItem>

              <MenuItem
                to="/member" 
                icon={<PeopleAltOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                >
                สมาชิก
              </MenuItem>

              <MenuItem
                to="/messages" 
                icon={<ForumOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                >
                Messages
              </MenuItem>
              <MenuItem
                to="/settings" 
                icon={<SettingsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                >
                settings
              </MenuItem>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default SideBar;
