import { Box, Typography } from "@mui/material";
import React from "react";
import "../../src/index.css";
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
const StatusOrder = ({
  user,
  Product,
  price,
  quantity,

}) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Box className='flex items-center  '>
          <StorefrontOutlinedIcon className="pr-3" sx={{ color: '#2980b9', fontSize: '3rem' }}/>
          <Typography variant="h5" fontWeight="600">
            การสั่งซื้อ
          </Typography>
        </Box>
       
      </Box>

      <Box className="flex flex-col">
        {/* Header Row */}
        <Box className="flex justify-between items-center font-semibold border-b  bg-gray-200 p-5">
          <Box className="flex-1 flex items-center">
            <Typography className="text-black " variant="h5">ผู้ชื้อ</Typography>
          </Box>
          <Box className="flex-1 flex items-center" variant="h8">
            <Typography className="text-black " variant="h5">รายการสินค้า</Typography>
          </Box>
          <Box className="flex-1 text-center" variant="h8">
            <Typography  className="text-black " variant="h5">ราคา</Typography>
          </Box>
          <Box className="flex-1 text-center" variant="h8">
            <Typography className="text-black " variant="h5">จำนวน</Typography>
          </Box>
         
        </Box>

        {/* Table Row (example data) */}
        <Box className="flex justify-between py-3 p-5 border-b border-gray-200">
          <Box className="flex-1">
            <Typography variant="h6">{user}</Typography>
          </Box>
          <Box className="flex-1">
            <Typography variant="h6">{Product}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography variant="h6">{price}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography variant="h6">{quantity}</Typography>
          </Box>
        
          
        </Box>
      </Box>
    </Box>
  );
};

export default StatusOrder;
