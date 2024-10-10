import AddIcon from '@mui/icons-material/Add'; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Button, FormControl, Typography } from "@mui/material";
import NativeSelect from '@mui/material/NativeSelect';
import React from 'react';
import '../../../src/index.css';
import Header from '../../components/Header';
import StatBox from "../../components/StatBox";
import LineChart from '../../components/LineChart';
import Catagory from '../../components/Catagory';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

const Index = () => {
    const currentDate = new Date().toLocaleDateString('th-TH', {
        day: 'numeric', 
        year: 'numeric',
        month: 'long',
    });

    return (
        <Box className="p-5 bg-gray-100 min-h-screen">
            {/* Header Section */}
            <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md">
                <Box className="flex items-center">
                    <CalendarMonthIcon className="text-gray-500" />
                    <Typography className="ml-2 text-lg font-medium">วันที่ {currentDate}</Typography>
                </Box>
                <Button variant="contained" color="success" className="flex items-center">
                    <AddIcon className="text-white" />
                    <Typography className="text-white ml-2">เพิ่มร้านค้า</Typography>
                </Button>
            </Box>

            {/* Stats Section */}
            <Box className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatBox title="ยอดขายทั้งหมด" progress="24,780" increase="+14%" />
                <StatBox title="ยอดเงินที่ได้กลับคืน" progress="17,489" increase="+14%" />
                <StatBox title="จำนวนสินค้าที่ขายได้" progress="9,962" increase="+29%" />
                <StatBox title="จำนวนสินค้าคงเหลือ" progress="50" />
            </Box>

            {/* Chart and Category Section */}
            <Box className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Box className="bg-white p-5 shadow-md rounded-md">
                    <Box className="flex justify-between items-center mb-4">
                        <Typography variant="h6" fontWeight="600">จำนวนสินค้าที่ขายดี</Typography>
                        <FormControl sx={{ bgcolor:'#F4F5F9', borderRadius: 1 }}>
                            <NativeSelect id="demo-customized-select-native" className="pl-2">
                                <option aria-label="None" value="" />
                                <option>สัปดาห์นี้</option>
                                <option>เดือนนี้</option>
                                <option>ปีนี้</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <LineChart 
                        labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                        datasets={[{
                            label: 'ยอดขาย',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]}
                    />
                </Box>

                <Box className="bg-white p-5 shadow-md rounded-md">
                    <Catagory 
                        title={'หมวดหมู่สินค้า'}
                        items={[
                            { icon: <CameraAltOutlinedIcon />, content: 'ภาพถ่าย', increase: '96.42' },
                            { icon: <NoteAddOutlinedIcon />, content: 'เวกเตอร์', increase: '89.23' },
                            { icon: <PermMediaOutlinedIcon />, content: 'มัลติมีเดีย', increase: '72.56' },
                            { icon: <ViewInArOutlinedIcon />, content: '3D Model', increase: '65.78' }
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;
