import React from 'react';
import { Box, Typography } from '@mui/material';
import '../../src/index.css';

const Category = ({ title, items }) => {
  return (
    <Box className="bg-white border border-gray-200 rounded-xl p-[2rem] max-w-[20rem]">
      <Box className="pl-2 pb-5">
        <Typography variant="h7" fontWeight="bold">  
          {title}         
        </Typography>
      </Box>
      <Box className="flex ">
        <Box className="flex flex-col p-2">
          {items.map((item, index) => (
            <Box key={index} className="flex space-x-5">
                <Box className='pb-5'>
                    {item.icon && <span>{item.icon}</span>}
                </Box>
                <Box>
                    {item.content && <span>{item.content}</span>}
                </Box>
                <Box>
                    {item.increase && <span>{item.increase} %</span>}
                </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Category;
