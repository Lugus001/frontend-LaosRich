import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Index = () => {
  const [date, setDate] = useState('');
  const [sales, setSales] = useState('');
  const [salesData, setSalesData] = useState([]);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem('authToken');
      console.log('Token:', token);

      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('http://183.88.209.149:28899/laosruey/api/v1/reports', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch reports');
      }

      setSalesData(data.reports); 
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  useEffect(() => {
    fetchReports(); 
  }, []);

  const handleAddSales = async () => {
    if (date && sales) {
      const reportData = { date, daily_sale: Number(sales) };

      try {
        const token = localStorage.getItem('token'); // Ensure token is available

        const response = await fetch('http://183.88.209.149:28899/laosruey/api/v1/reports', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          },
          body: JSON.stringify(reportData),
        });

        if (response.ok) {
          const savedReport = await response.json(); // Handle the response if needed
          console.log('Report created:', savedReport);

          // Fetch the updated reports after adding a new one
          fetchReports();

          // Reset input fields
          setDate('');
          setSales('');
        } else {
          const errorData = await response.json();
          console.error('Error creating report:', errorData.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      <Box className="flex flex-col md:flex-col md:justify-between md:items-center p-4 mb-4">
        <Typography variant="h7" fontWeight="bold">รายงานการขายทั้งหมด</Typography>
      </Box>

      <Box className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <TextField
          label="วันที่ (Day)"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />

        <TextField
          label="ยอดขายต่อวัน (Daily Sales)"
          type="number"
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          placeholder="Enter daily sales amount"
          variant="outlined"
        />

        <Button variant="contained" color="primary" onClick={handleAddSales}>
          Add Sales
        </Button>
      </Box>

      {salesData.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>วันที่ (Day)</TableCell>
                <TableCell align="right">ยอดขายต่อวัน (Daily Sales)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell align="right">{entry.daily_sale}</TableCell> {/* Adjust according to your API response */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Index;
