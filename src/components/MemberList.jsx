import { Box, Typography, Button } from "@mui/material";
import React from 'react';
import '../../src/index.css';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const MemberList = ({total, number, tel, email, name, region, status }) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
      <Box mb={2}>
        <Box className="flex">
            <Typography variant="h6" fontWeight="600">
                จำนวนสมาชิก
            </Typography>
            <Typography variant="h6" fontWeight="600" className='text-gray-400'>
                {total}
            </Typography>
        </Box>
        
        
      </Box>

      <Box className="flex flex-col">
        <Box className="flex justify-between font-semibold border-b pb-3">
        <input type="radio"  className="w-5 h-5 appearance-none rounded-md border-2 border-black checked:bg-black" />
        <Typography >หมายเลข</Typography>
          <Typography >เบอร์โทรศัพท์</Typography>
          <Typography >Email</Typography>
          <Typography >ชื่อสมาชิก</Typography>
          <Typography>สัญชาติ</Typography>
          <Typography>สถานะการจ่ายเงิน</Typography>
        </Box>

        {/* Table Rows (example data) */}
        <Box className="flex justify-between py-4 ">
        <input type="radio" className="w-5 h-5 appearance-none rounded-md  border-2 border-black checked:bg-black" />
          <Typography >{number}</Typography>
          <Typography >{tel}</Typography>
          <Typography >{email}</Typography>
          <Typography >{name}</Typography>
          <Typography >{region}</Typography>
          <Typography >{status}</Typography>

        </Box>

        
      </Box>
      <Box className='flex justify-end space-x-3 pt-5'>
            <Box className='border border-gray-300 rounded-md   '>
              <Button>
                <WestOutlinedIcon className='text-green-500'/>
               <p className='text-green-500'>ก่อนหน้า</p> 
              </Button>
            </Box>
            <Box className='border border-gray-300 rounded-md '>
              <Button>
              <p className='text-green-500'>ต่อไป</p> 
              <EastOutlinedIcon className='text-green-500'/>
              </Button>
            </Box>

          </Box>
    </Box>
  );
};

export default MemberList;
