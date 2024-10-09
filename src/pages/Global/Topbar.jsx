import React, { useState } from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, IconButton, InputBase } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import '../../../src/index.css';

const Topbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false); 

  const handleSearchButtonClick = () => {
    setShowSearchInput((prev) => !prev);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} className="bg-white ">
      <Box display="flex" alignItems="center" flexGrow={1}>
        {showSearchInput && ( 
          <InputBase 
            className='ml-2 flex-1'
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }} 
          />
        )}
        <IconButton type="button" className="p-1" onClick={handleSearchButtonClick}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      
      <Box display="flex" alignItems="center">
        <IconButton className="p-1">
          <ForumOutlinedIcon />
        </IconButton>
        <IconButton>
          <ErrorOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
