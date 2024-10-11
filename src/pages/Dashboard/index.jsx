import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../src/index.css";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import StatusOrder from "../../components/StatusOrder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("th-TH", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      {/* Header Section */}
      <Box className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-md p-4 rounded-md mb-4">
        <Box className="flex items-center">
          <CalendarMonthIcon className="text-gray-500" />
          <Typography className="ml-2 text-lg font-medium">
            วันที่ {currentDate}
          </Typography>
        </Box>
      </Box>

      {/* Title Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      ></Box>

      {/* StatBox Section */}
      <Box className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatBox
          title="ยอดขายรวมของวันนี้"
          subtitle="ยอดที่ได้"
          progress="24.780"
          increase="+14%"
        />

        <StatBox
          title="ยอดขายรวมของเดือนนี้"
          subtitle="ยอดที่ได้"
          progress="17.489"
          increase="+14%"
        />
        <StatBox
          title="ยอดขายสะสมรวมทั้งปี"
          subtitle="ยอดที่ได้"
          progress="9.962"
          increase="+29%"
        />
        <StatBox
          title="ยอดขายทั้งหมด"
          subtitle="รวม"
          progress="50.000"
          increase="+5%"
        />
      </Box>

      {/* StatusOrder Section */}
      <Box className="pt-5">
        <StatusOrder
          Product="Laos Pictures"
          price="150 บาท"
          quantity="1"
          total="150 บาท"
          moneyBack="10 บาท"
          commission="10 บาท"
          received="10 บาท"
        />
      </Box>
    </Box>
  );
};

export default Index;
