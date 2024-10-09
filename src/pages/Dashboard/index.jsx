import { Box, Typography } from "@mui/material";
import React from 'react';
import '../../../src/index.css';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import StatusOrder from "../../components/StatusOrder";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Index = () => {
  const currentDate = new Date().toLocaleDateString('th-TH', {
    day: 'numeric', 
    year: 'numeric',
    month: 'long',
  });
  

  return (
    <Box className="p-5">
      <Box className="flex float-end border border-gray-300   p-1">
        <CalendarMonthIcon 
        className="p-1"
        />
        <Typography   >
          วันที่ {currentDate}
        </Typography>
       
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ยอดขายรวม" />
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
            title="ยอดขายรวมของวันนี้"
            subtitle="ยอดที่ได้"
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
            title="ยอดขายรวมของเดือนนี้"
            subtitle="ยอดที่ได้"
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
            title="ยอดขายสะสมรสรวมทั้งปี"
            subtitle="ยอดที่ได้"
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
            title="ยอดขายทั้งหมด"
            subtitle="รวม"
            progress="50.000"
            increase="+5%"
          />
        </Box>
      </Box>
      <Box className="p-[5rem]">
        <StatusOrder />
      </Box>
    </Box>
  );
}

export default Index;