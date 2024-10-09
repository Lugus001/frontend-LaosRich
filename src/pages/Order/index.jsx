import React from 'react'
import { Box, Typography } from "@mui/material";
import '../../../src/index.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const index = () => {
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

    </Box>
  )
}

export default index