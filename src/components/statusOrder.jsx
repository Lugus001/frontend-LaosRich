import React from 'react';
import { Box, Typography } from "@mui/material";
import '../../src/index.css';

const StatusOrder = ({Product, price, quantity, total, moneyBack, commission, received}) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Typography variant="h5" fontWeight="600">
          สถานะการสั่งซื้อ
        </Typography>
      </Box>

      <Box className="flex flex-col">
        <Box className="flex justify-between font-semibold border-b pb-2">
          <Typography >รายการสินค้า</Typography>
          <Typography >ราคา</Typography>
          <Typography >จำนวน</Typography>
          <Typography>ยอดรวม</Typography>
          <Typography>เงินกลับคืน</Typography>
          <Typography>Commission </Typography>
          <Typography>ที่ได้รับ</Typography>
        </Box>

        {/* Table Rows (example data) */}
        <Box className="flex justify-between py-2 ">
          <Typography >{Product}</Typography>
          <Typography >{price}</Typography>
          <Typography >{quantity}</Typography>
          <Typography >{total}</Typography>
          <Typography >{moneyBack}</Typography>
          <Typography >{commission}</Typography>
          <Typography>{received}</Typography>
        </Box>

        
      </Box>
    </Box>
  );
};

export default StatusOrder;
