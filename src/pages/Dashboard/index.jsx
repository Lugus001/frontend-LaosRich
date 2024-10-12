import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../src/index.css";
import StatBox from "../../components/StatBox";
import StatusOrder from "../../components/StatusOrder";
import RealtimeBox from "../../components/RealtimeBox";
import Loaluay from '../../assets/logo/loaluay.png';

const Index = () => {
 

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5">
      <Box className="flex flex-col md:flex-col md:justify-between md:items-center  p-4  mb-4">
        
        <Box className='w-full p-3'>
        <RealtimeBox
          title="ยอดขายรูปของวันนี้"
          num = "1"
          picture={Loaluay}
          subtitle='NFT coin'
          total='1'
          prize='100'
        />

        </Box>
        
      </Box>
     
     
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      ></Box>

  <Box className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        
        <StatBox
          title="ยอดขายรูป ของเดือนนี้"
          subtitle="ยอดที่ได้"
          progress="17.489"
          increase="+14%"
        />
        <StatBox
          title="ยอดขายรูป สะสมรวมทั้งปี"
          subtitle="ยอดที่ได้"
          progress="9.962"
          increase="+29%"
        />
        <StatBox
          title="ยอดขายรูปทั้งหมด"
          subtitle="รวม"
          progress="50.000"
          increase="+5%"
        />
      </Box>

      {/* StatusOrder Section */}
      <Box className="pt-5">
        <StatusOrder
          user='User1'
          Product="NFT coin"
          price="150 บาท"
          quantity="1"
        />
      </Box>
    </Box>
  );
};

export default Index;
