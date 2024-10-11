import React from "react";
import { Box, Typography } from "@mui/material";
import "../../src/index.css";

const StatusOrder = ({
  Product,
  price,
  quantity,
  total,
  moneyBack,
  commission,
  received,
}) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Typography variant="h5" fontWeight="600">
          สถานะการสั่งซื้อ
        </Typography>
      </Box>

      <Box className="flex flex-col">
        {/* Header Row */}
        <Box className="flex justify-between font-semibold border-b pb-2">
          <Box className="flex-1">
            <Typography>รายการสินค้า</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>ราคา</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>จำนวน</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>ยอดรวม</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>เงินกลับคืน</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>Commission</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>ที่ได้รับ</Typography>
          </Box>
        </Box>

        {/* Table Row (example data) */}
        <Box className="flex justify-between py-3 ">
          <Box className="flex-1">
            <Typography>{Product}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{price}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{quantity}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{total}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{moneyBack}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{commission}</Typography>
          </Box>
          <Box className="flex-1 text-center">
            <Typography>{received}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatusOrder;
