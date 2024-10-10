import { Box, Typography } from "@mui/material";
import React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import '../../src/index.css';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    return (
        <Box className="bg-white border border-gray-200 rounded-xl p-[2rem]">
            <Box display="flex" justifyContent="flex-end">
                <MoreHorizOutlinedIcon />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                
                <Box >
                    {icon}
                    
                    <Typography
                        variant="h9"
                        fontWeight="bold"
                    >
                        {title}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" mt="2px">
                        <Typography className="text-gray-400">
                            {subtitle}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box className='flex mt-4'>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" className="font-extrabold">
                        ${progress}
                    </Typography>
                </Box>
                <Box className="pl-5 pb-3">
                    <Typography className="bg-green-500 rounded-full w-[4rem] h-[2rem] text-white pl-2 pt-1">
                        {increase}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StatBox;
