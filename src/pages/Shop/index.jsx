import { Box, Button, Select, MenuItem, Typography, Grid } from "@mui/material";
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import * as XLSX from 'xlsx'; 
import '../../../src/index.css';
import BuyBox from "../../components/BuyBox";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
const Index = () => {
    const currentDate = new Date().toLocaleDateString('th-TH', {
        day: 'numeric', 
        year: 'numeric',
        month: 'long',
    });

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const salesData = [
        { id: 1, date: '01/10/2024', picture: 'NFT Coin 01', amount: 500, buyer: 'Buyer A' },
        { id: 2, date: '02/10/2024', picture: 'NFT Coin 01', amount: 800, buyer: 'Buyer B' },
        { id: 3, date: '03/10/2024', picture: 'NFT Coin 01', amount: 600, buyer: 'Buyer C' },
    ];

    // Filter data based on selected date range
    const filteredData = salesData.filter(item => {
        const itemDate = new Date(item.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return (!startDate || itemDate >= start) && (!endDate || itemDate <= end);
    });

    const handlePrintReport = () => {
        console.log(`Print report from ${startDate} to ${endDate}`);
        console.log(filteredData);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData.map(({ id, date, amount, buyer }) => ({
            ID: id,
            Date: date,
            Amount: amount,
            Buyer: buyer,
        })));

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sales Data");

        XLSX.writeFile(wb, `Sales_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);
    };

    return (
        <Box className="p-5 bg-gray-100 min-h-screen">
            <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md">
                <Box className="flex items-center">
                    <CalendarMonthIcon className="text-gray-500" />
                    <Typography className="ml-2 text-lg font-medium">วันที่ {currentDate}</Typography>
                </Box>
            </Box>

            <Box className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BuyBox
                    icon={<CalendarMonthOutlinedIcon className="pr-3" sx={{ color: '#2ecc71', fontSize: '3rem' }} />}
                    title="ยอดขายรูปทั้งหมด" 
                    progress="24,780 บาท" />

                <BuyBox 
                    icon={<CalendarTodayOutlinedIcon className="pr-3" sx={{ color: '#f39c12', fontSize: '3rem' }}/>}
                    title="จำนวนรูปที่ขายได้" 
                    progress='500 บาท' /> 

                <BuyBox 
                    icon={<LocalGroceryStoreOutlinedIcon className="pr-3" sx={{ color: '#9b59b6', fontSize: '3rem' }}/>}
                    title="จำนวนผู้ซื้อ" 
                    progress='5คน' /> 

            </Box>

            <Box className="mt-6 bg-white p-4 rounded-md shadow-md">
                <Typography variant="h5" fontWeight="bold"  className="mb-4 p-3">รายงานการขายทั้งหมด</Typography>
                
            
                <Box className="flex flex-wrap items-center gap-4 mb-4 p-3">
                    <Select
                        label="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        displayEmpty
                        variant="outlined"
                        className="min-w-[150px]"
                    >
                        <MenuItem value="" disabled>Start Date</MenuItem>
                        <MenuItem value="2024-10-01">01/10/2024</MenuItem>
                        <MenuItem value="2024-10-02">02/10/2024</MenuItem>
                        <MenuItem value="2024-10-03">03/10/2024</MenuItem>
                    </Select>

                    <Select
                        label="End Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        displayEmpty
                        variant="outlined"
                        className="min-w-[150px]"
                    >
                        <MenuItem value="" disabled>End Date</MenuItem>
                        <MenuItem value="2024-10-01">01/10/2024</MenuItem>
                        <MenuItem value="2024-10-02">02/10/2024</MenuItem>
                        <MenuItem value="2024-10-03">03/10/2024</MenuItem>
                    </Select>

                    <Box className="flex text-right ">
                        <Box className='p-3'>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handlePrintReport}
                                startIcon={<AddIcon />}
                                className="mt-4 md:mt-0 mr-2  "
                            >
                                Print Report
                            </Button>
                        </Box>
                        
                        <Box className='p-3'>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={exportToExcel}
                                className="mt-4 md:mt-0"
                            >
                                Export to Excel
                            </Button>
                        </Box>
                    </Box>

                    
                </Box>

                <Box className="font-semibold mb-2  pb-2 bg-gray-200 ">
                <Grid container spacing={2} >
                    <Grid item xs={1}>
                        <Typography className="text-gray-600 pl-[0.5rem] "></Typography>
                    </Grid>
                    <Grid item xs={2} className="text-left ">
                        <Typography className="text-black " variant='h6' >วันที่</Typography>
                    </Grid>
                    <Grid item xs={5} className="text-center pr-[25%]">
                        <Typography className="text-black " variant='h6' >รูป</Typography>
                    </Grid>
                    <Grid item xs={2} className="text-left">
                        <Typography className="text-black " variant='h6' >จำนวน</Typography>
                    </Grid>
                    <Grid item xs={2} className="text-right pr-[2%]">
                        <Typography className="text-black " variant='h6' >ราคา</Typography>
                    </Grid>
                </Grid>
            </Box>

                {filteredData.length > 0 ? (
                    <ul className="p-5 space-y-4">
                        {filteredData.map(item => (
                            <li className="p-2 flex justify-between items-center border-b border-gray-200" key={item.id}>
                                <span className="font-semibold">วันที่: {item.date}</span>
                                <span><img src={item.picture} className="w-10 h-10 object-cover" /></span>
                                <span className="pl-[10%] font-semibold">ราคา: {item.amount} บาท</span>
                                <span className="font-semibold">ผู้ซื้อ: {item.buyer}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography>ไม่พบข้อมูล</Typography>
                )}
            </Box>
        </Box>
    );
}

export default Index;
