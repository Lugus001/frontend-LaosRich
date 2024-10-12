import { Box, Typography } from "@mui/material";
import React from "react";
import "../../src/index.css";

const StatusOrder = ({
  user,
  Product,
  price,
  quantity,

}) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Typography variant="h5" fontWeight="600">
          การสั่งซื้อ
        </Typography>
      </Box>

      <Box className="flex flex-col">
        {/* Header Row */}
        <Box className="flex justify-between font-semibold border-b pb-2">
          <Box className="flex-1">
            <Typography className="text-gray-500">ผู้ชื้อ</Typography>
          </Box>
          <Box className="flex-1">
            <Typography className="text-gray-500">รายการสินค้า</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography  className="text-gray-500">ราคา</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography className="text-gray-500">จำนวน</Typography>
          </Box>
         
        </Box>

        {/* Table Row (example data) */}
        <Box className="flex justify-between py-3 ">
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
