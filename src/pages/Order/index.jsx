import React from 'react';
import { Box, Typography, useMediaQuery } from "@mui/material";
import '../../../src/index.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Header from "../../components/Header";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ListOrder from "../../components/ListOrder";

const Index = () => {
  const currentDate = new Date().toLocaleDateString('th-TH', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

  // MUI Hook for media queries
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box className="p-5">
      <Box className={`flex ${isMobile ? 'justify-center' : 'float-end'} border border-gray-300 p-1`}>
        <CalendarMonthIcon className="p-1" />
        <Typography>วันที่ {currentDate}</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="คำสั่งซื้อ" />
      </Box>

      <Box className="bg-white p-5">
        <Box className="pt-3">
          <Typography variant="h5" fontWeight="bold">สถานะคำสั่งซื้อ</Typography>
        </Box>
        
        {/* Responsive Box wrapping order statuses */}
        <Box className="flex flex-wrap mt-4 space-y-4 lg:space-x-5 justify-between">
          {/* New Order */}
          <Box className="bg-white border border-gray-200 rounded-xl p-4 lg:p-[2rem] flex w-full lg:w-auto justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <ShoppingBasketOutlinedIcon />
            </Box>
            <Box className="flex flex-col">
              <Typography className="pl-5 text-lg lg:text-xl">คำสั่งซื้อใหม่</Typography>
              <Typography className="pl-8">2 รายการ</Typography>
            </Box>
          </Box>

          {/* Pending Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-4 lg:p-[2rem] flex w-full lg:w-auto justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <ShoppingBagOutlinedIcon />
            </Box>
            <Box className="flex flex-col">
              <Typography className="pl-5 text-lg lg:text-xl">คำสั่งซื้อที่ค้างอยู่</Typography>
              <Typography className="pl-8">2 รายการ</Typography>
            </Box>
          </Box>

          {/* Problematic Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-4 lg:p-[2rem] flex w-full lg:w-auto justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <PriorityHighOutlinedIcon />
            </Box>
            <Box className="flex flex-col">
              <Typography className="pl-5 text-lg lg:text-xl">คำสั่งซื้อที่มีปัญหา</Typography>
              <Typography className="pl-8">2 รายการ</Typography>
            </Box>
          </Box>

          {/* Completed Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-4 lg:p-[2rem] flex w-full lg:w-auto justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <DoneOutlinedIcon />
            </Box>
            <Box className="flex flex-col">
              <Typography className="pl-5 text-lg lg:text-xl">จัดส่งสินค้าสำเร็จ</Typography>
              <Typography className="pl-8">2 รายการ</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="p-4 lg:p-[5rem]">
          <ListOrder />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
