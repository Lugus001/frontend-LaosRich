import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "../../../src/index.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Header from "../../components/Header";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import ListOrder from "../../components/ListOrder";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("th-TH", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  // MUI Hook for media queries
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      {/* Header Section */}
      <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md mb-4">
        <Box className="flex items-center">
          <CalendarMonthIcon className="text-gray-500" />
          <Typography className="ml-2 text-lg font-medium">
            วันที่ {currentDate}
          </Typography>
        </Box>
      </Box>

      {/* Status Section */}
      <Box className=" p-4 md:p-5 rounded-lg ">
        <Typography variant="h5" fontWeight="bold" mb={3}>
          สถานะคำสั่งซื้อ
        </Typography>

        <Box className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* New Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-5 lg:p-8 flex justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <ShoppingBasketOutlinedIcon />
            </Box>
            <Box className="flex flex-col">
              <Typography className="text-lg lg:text-xl font-bold text-gray-800">
                คำสั่งซื้อใหม่
              </Typography>
              <Typography className="text-sm text-gray-600">
                2 รายการ
              </Typography>
            </Box>
          </Box>

          {/* Pending Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-5 lg:p-8 flex justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <ShoppingBagOutlinedIcon />
            </Box>
            <Box className="flex flex-col pl-4">
              <Typography className="text-lg lg:text-xl font-bold text-gray-800">
                คำสั่งซื้อที่ค้างอยู่
              </Typography>
              <Typography className="text-sm text-gray-600">
                2 รายการ
              </Typography>
            </Box>
          </Box>

          {/* Problematic Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-5 lg:p-8 flex justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <PriorityHighOutlinedIcon />
            </Box>
            <Box className="flex flex-col pl-4">
              <Typography className="text-lg lg:text-xl font-bold text-gray-800">
                คำสั่งซื้อที่มีปัญหา
              </Typography>
              <Typography className="text-sm text-gray-600">
                2 รายการ
              </Typography>
            </Box>
          </Box>

          {/* Completed Orders */}
          <Box className="bg-white border border-gray-200 rounded-xl p-5 lg:p-8 flex justify-between items-center">
            <Box className="bg-green-200 p-4 lg:p-6 rounded-xl">
              <DoneOutlinedIcon />
            </Box>
            <Box className="flex flex-col pl-4">
              <Typography className="text-lg lg:text-xl font-bold text-gray-800">
                จัดส่งสินค้าสำเร็จ
              </Typography>
              <Typography className="text-sm text-gray-600">
                2 รายการ
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Order List */}
        <Box className="pt-5">
          <ListOrder
            Product="Laos Pictures"
            user="user01"
            price="150 บาท"
            quantity="1"
            total="150 บาท"
            moneyBack="10 บาท"
            commission="10 บาท"
            received="10 บาท"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
