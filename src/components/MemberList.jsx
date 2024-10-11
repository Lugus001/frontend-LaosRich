import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "../../src/index.css";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const MemberList = ({ total, number, tel, email, name, region, status }) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-8">
      <Box mb={2}>
        <Box className="flex justify-between">
          <Typography variant="h6" fontWeight="600">
            จำนวนสมาชิก
          </Typography>
          <Typography variant="h6" fontWeight="600" className="text-gray-400">
            {total}
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col">
        {/* Table Header */}
        <Box className="flex justify-between font-semibold border-b pb-2">
          <Box className="w-[5%] text-center">
            <input
              type="radio"
              className="w-5 h-5 appearance-none rounded-md border-2 border-black checked:bg-black"
            />
          </Box>
          <Typography className="w-[10%] text-center">หมายเลข</Typography>
          <Typography className="w-[15%] text-center">เบอร์โทรศัพท์</Typography>
          <Typography className="w-[20%] text-center">Email</Typography>
          <Typography className="w-[20%] text-center">ชื่อสมาชิก</Typography>
          <Typography className="w-[15%] text-center">สัญชาติ</Typography>
          <Typography className="w-[15%] text-center">
            สถานะการจ่ายเงิน
          </Typography>
        </Box>

        {/* Table Rows (example data) */}
        <Box className="flex justify-between py-2">
          <Box className="w-[5%] text-center">
            <input
              type="radio"
              className="w-5 h-5 appearance-none rounded-md border-2 border-black checked:bg-black"
            />
          </Box>
          <Typography className="w-[10%] text-center">{number}</Typography>
          <Typography className="w-[15%] text-center">{tel}</Typography>
          <Typography className="w-[20%] text-center">{email}</Typography>
          <Typography className="w-[20%] text-center">{name}</Typography>
          <Typography className="w-[15%] text-center">{region}</Typography>
          <Typography className="w-[15%] text-center">{status}</Typography>
        </Box>
      </Box>

      <Box className="flex justify-end space-x-3 pt-5">
        <Box className="border border-gray-300 rounded-md">
          <Button>
            <WestOutlinedIcon className="text-green-500" />
            <Typography className="text-green-500">ก่อนหน้า</Typography>
          </Button>
        </Box>
        <Box className="border border-gray-300 rounded-md">
          <Button>
            <Typography className="text-green-500">ต่อไป</Typography>
            <EastOutlinedIcon className="text-green-500" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MemberList;
