import { Box, Typography, Grid } from "@mui/material";
import React from 'react';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import '../../src/index.css';

const RealtimeBox = ({ title, subtitle, picture, num, total, prize }) => {
    const currentDate = new Date().toLocaleDateString("th-TH", {
        day: "numeric",
        year: "numeric",
        month: "long",
    });

    return (
        <Box className="bg-white border border-gray-200 rounded-xl p-5 w-full shadow-md hover:shadow-lg transition-shadow duration-200">
            {/* Date Section */}
            <Box className="flex items-center justify-end bg-white p-3 rounded-lg">
                <CalendarMonthIcon className="text-gray-500" />
                <Typography className="ml-2 text-lg font-medium">
                    วันที่ {currentDate}
                </Typography>
            </Box>
            
            {/* Title Section */}
            <Box display="flex" alignItems="center" mb={2}>
                <Box textAlign="center" flexGrow={1}>
                    <Typography variant="h5" className='text-center'>
                        {title}
                    </Typography>
                </Box>
            </Box>

            {/* Table Header */}
            <Box className="font-semibold mb-2 border-b border-gray-300 pb-2">
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Typography className="text-gray-500">No.</Typography>
                    </Grid>
                    <Grid item xs={2} className="text-center">
                        <Typography className="text-gray-500">รูป</Typography>
                    </Grid>
                    <Grid item xs={5} className="text-center">
                        <Typography className="text-gray-500">ชื่อรูป</Typography>
                    </Grid>
                    <Grid item xs={2} className="text-center">
                        <Typography className="text-gray-500">จำนวน</Typography>
                    </Grid>
                    <Grid item xs={2} className="text-center">
                        <Typography className="text-gray-500">ราคา</Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Table Row */}
            <Box className="flex items-center py-3">
                <Grid container spacing={2}>
                    <Grid item xs={1} className="flex justify-center">
                        <Typography variant="h6" className="font-extrabold">
                            #{num}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className="flex justify-center">
                        <img src={picture} alt={title} style={{ width: '50px', height: '50px', borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={5} className="flex justify-center">
                        <Typography variant="h6" className="font-extrabold">
                            {subtitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className="flex justify-center">
                        <Typography variant="h6" className="font-extrabold">
                            {total} ชิ้น
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className="flex justify-center">
                        <Typography variant="h6" className="font-extrabold">
                            {prize} บาท
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default RealtimeBox;