import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../src/index.css";
import RealtimeBox from "../../components/RealtimeBox";
import Loaluay from '../../assets/logo/loaluay.png';

const Index = () => {
 

  return (
    <Box className="bg-gray-100 min-h-screen p-4 md:p-5 ">
      <Box className="flex flex-col md:flex-col md:justify-between md:items-center  p-4  mb-4 ">
      
        <Box className='w-full p-3 '>
        <RealtimeBox
          title="ยอดขายรูปของวันนี้"
          num = "1"
          picture={Loaluay}
          subtitle='NFT '
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

  

     
    </Box>
  );
};

export default Index;
