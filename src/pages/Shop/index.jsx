import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import '../../../src/index.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/Header';
import StatBox from "../../components/StatBox";
import LineChart from '../../components/LineChart';

const index = () => {
    const currentDate = new Date().toLocaleDateString('th-TH', {
        day: 'numeric', 
        year: 'numeric',
        month: 'long',
      });
  return (
    <Box className="p-5">
        <Box className="flex space-x-4 justify-end">
            <Box className="flex float-end border border-gray-300 p-1 ">
                <CalendarMonthIcon 
                className="p-1"
                />
                <Typography   >
                วันที่ {currentDate}
                </Typography>
            </Box>

            <Box  className='bg-green-500 border border-green-500  items-center '>
                <Button>
                 <AddIcon className='text-white'/>
                 <Typography className='text-white'>
                    เพิ่มร้านค้า
                </Typography >

                    </Button>
                </Box>
            </Box>      
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="ร้าน NFT" />
            </Box>
            <Box
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} // Responsive grid
        gridAutoRows="150px"
        gap="20px"
        className="p-5"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="ยอดขายทั้งหมด"
            progress="24.780"
            increase="+14%"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="ยอดเงินที่ได้กลับคืน"
            progress="17.489"
            increase="+14%"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="จำนวนสินค้าที่ขายได้"
            progress="9.962"
            increase="+29%"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="จำนวนสินค้าคงเหลือ"
            progress="50"
          />
        </Box>
      </Box>
      <Box>
        <LineChart/>
      </Box>
    </Box>
        
      
  )
}

export default index