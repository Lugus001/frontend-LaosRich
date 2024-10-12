import { Box, Button, Select, MenuItem, Typography } from "@mui/material";
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import * as XLSX from 'xlsx'; // Import the xlsx library
import '../../../src/index.css';
import StatBox from "../../components/StatBox";

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

    // Function to export data to Excel
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData.map(({ id, date, amount, buyer }) => ({
            ID: id,
            Date: date,
            Amount: amount,
            Buyer: buyer,
        })));

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sales Data");

        // Generate the Excel file and trigger download
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
                <StatBox title="ยอดขายรูปทั้งหมด" progress="24,780 บาท" />
                <StatBox title="จำนวนรูปที่ขายได้" progress='500 บาท' /> 
                <StatBox title="จำนวนผู้ซื้อ" progress='5คน' /> 
            </Box>

            <Box className="mt-6 bg-white p-4 rounded-md shadow-md">
                <Typography variant="h6" className="mb-4">รายงานการขายทั้งหมด</Typography>
                
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
                        {/* Sample dates - replace with your own logic to generate dates */}
                        <MenuItem value="2024-10-01">01/10/2024</MenuItem>
                        <MenuItem value="2024-10-02">02/10/2024</MenuItem>
                        <MenuItem value="2024-10-03">03/10/2024</MenuItem>
                        {/* Add more dates as needed */}
                    </Select>

                    {/* Select for End Date */}
                    <Select
                        label="End Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        displayEmpty
                        variant="outlined"
                        className="min-w-[150px]"
                    >
                        <MenuItem value="" disabled>End Date</MenuItem>
                        {/* Sample dates - replace with your own logic to generate dates */}
                        <MenuItem value="2024-10-01">01/10/2024</MenuItem>
                        <MenuItem value="2024-10-02">02/10/2024</MenuItem>
                        <MenuItem value="2024-10-03">03/10/2024</MenuItem>
                        {/* Add more dates as needed */}
                    </Select>

                    {/* Align Buttons to the right */}
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

                {/* Render the filtered data */}
                {filteredData.length > 0 ? (
                    <ul className="p-5 space-y-4">
                        {filteredData.map(item => (
                            <li className="p-2 flex justify-between items-center border-b border-gray-200" key={item.id}>
                                <span>วันที่: {item.date}</span>
                                <span><img src={item.picture} className="w-10 h-10 object-cover" /></span>
                                <span>ราคา: {item.amount} บาท</span>
                                <span>ผู้ซื้อ: {item.buyer}</span>
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
