import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import React from 'react';
import '../../../src/index.css';
import Header from "../../components/Header";
import MemberList from "../../components/MemberList";
import AddIcon from '@mui/icons-material/Add'; 

const Index = () => {
  const currentDate = new Date().toLocaleDateString('th-TH', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

  return (
    <Box className="p-5 bg-gray-100 min-h-screen">
        <Box className="flex  justify-end p-5">
          <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-3 rounded-md">
            <CalendarMonthIcon className="p-1" />
            <Typography className="ml-2 text-lg font-medium">วันที่ {currentDate}</Typography>
          </Box>
          <Box className="flex flex-col md:flex-row md:justify-between md:items-center rounded-md pl-3">
            <Button variant="contained" color="success" className="flex items-center ">
              <AddIcon className="text-white" />
              <Typography className="text-white ml-2">แก้ไขสมาชิก</Typography>
            </Button>
          </Box>
        </Box>
        <Box className="bg-white p-5">
          <Box className="pt-5 pl-5">
            <Typography variant="h5" fontWeight="bold">สมาชิก</Typography>
            <Box className="border border-gray-200"></Box>
          </Box>       
          <Box className="p-3 lg:p-[2rem]">
          <MemberList
            number=''
            tel=''
            email=''
            name=''
            region=''
            status=''
            />
            
        </Box>

          
        
      </Box>

    </Box>

    
  );
};

export default Index;
