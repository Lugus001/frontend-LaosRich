import React from 'react';
import { Box, Typography } from "@mui/material";
import '../../src/index.css';

const ListOrder = ({Product, price, quantity, total, moneyBack, commission, received, user}) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Typography variant="h5" fontWeight="600">
        รายการสั่งซื้อ
        </Typography>
      </Box>

      <Box className="flex flex-col">
        <Box className="flex justify-between font-semibold border-b pb-2">
          <Typography >รายการสินค้า</Typography>
          <Typography >รายชื่อผู้ซื้อ</Typography>
          <Typography >ราคา</Typography>
          <Typography >จำนวน</Typography>
          <Typography>ยอดรวม</Typography>
          <Typography>เงินกลับคืน</Typography>
          <Typography>Commission </Typography>
          <Typography>ที่ได้รับ</Typography>
        </Box>

        {/* Table Rows (example data) */}
        <Box className="flex justify-between py-2 ">
          <Typography  variant="h6">{Product}</Typography>
          <Typography variant="h6">{user}</Typography>
          <Typography variant="h6">{price}</Typography>
          <Typography variant="h6">{quantity}</Typography>
          <Typography className="text-green-500 " variant="h6">{total}</Typography>
          <Typography  className="text-blue-500 " variant="h6">{moneyBack}</Typography>
          <Typography className="text-yellow-500 " variant="h6">{commission}</Typography>
          <Typography className="text-purple-500 " variant="h6">{received}</Typography>
        </Box>

        
      </Box>
    </Box>
  );
};

export default ListOrder;
