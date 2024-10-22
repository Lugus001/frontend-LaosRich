import { Box, Typography } from "@mui/material";
import React from 'react';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import '../../src/index.css';

const RealtimeBox = ({ title, num, noun }) => {
    const currentDate = new Date().toLocaleDateString("th-TH", {
        day: "numeric",
        year: "numeric",
        month: "long",
    });

    return (
        <Box className="bg-[#151515] border border-gray-200 rounded-xl p-5 w-full shadow-md hover:shadow-lg transition-shadow duration-200">
            {/* Date Section */}
            <Box className="flex items-center justify-end bg-[#151515] p-3 rounded-lg">
                <CalendarMonthIcon 
                    className="text-white" 
                    sx={{ fontSize: { xs: '1.25rem', sm: '1.75rem' } }} 
                />
                <Typography 
                    className="ml-2 font-medium font-kanit text-white"
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} 
                >
                    วันที่ {currentDate}
                </Typography>
            </Box>
            
            {/* Title Section */}
            <Box display="flex" alignItems="center" mb={2}>
                <Box textAlign="center" flexGrow={1}>
                    <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        className="text-left pl-3 pb-3 font-kanit text-white"
                        sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} 
                    >
                        <MonetizationOnOutlinedIcon 
                            className="pr-3" 
                            sx={{ color: '#FFD700', fontSize: { xs: '2.5rem', sm: '4rem' } }} 
                        />
                        {title}
                    </Typography>
                </Box>
            </Box>

            {/* Table Row */}
            <Box className="flex items-center justify-center space-x-2">
                <Typography 
                    variant="h3" 
                    fontWeight="bold" 
                    className="font-kanit text-white" 
                    sx={{ fontSize: { xs: '1.5rem', sm: '3rem' } }} 
                >
                    {num}
                </Typography>
                <Typography 
                    variant="h3" 
                    className="font-kanit text-white"
                    sx={{ fontSize: { xs: '1.5rem', sm: '3rem' } }} 
                >
                    {noun}
                </Typography>
            </Box>
        </Box>
    );
};

export default RealtimeBox;
