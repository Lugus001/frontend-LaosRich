import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import logo from '../../assets/logo/loaluay.png';
import '../../../src/index.css'; 

const Topbar = () => {
  // State to store the user name
  const [userName, setUserName] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchUserData = async () => {  
    const token = localStorage.getItem('authToken'); 
    try {
      const response = await fetch('http://183.88.209.149:18899/laosruey/api/v1/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      if (response.ok) {
        const fullName = `${data.user.first_name} ${data.user.last_name}`;
        setUserName(fullName);
      } else {
        console.error('Failed to fetch user data', data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
      p={2} 
      className="bg-[#2B2B2B]" 
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        textAlign: { xs: 'center', sm: 'left' },    
      }}
    >
      <Box 
        display="flex" 
        alignItems="center"
        flexGrow={1}
        sx={{ 
          justifyContent: { xs: 'center', sm: 'flex-start' } 
        }}
      >
        <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          className='text-white font-kanit'
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}  
        >
          Laos Rich
        </Typography>
      </Box>

      <Box 
        display="flex" 
        alignItems="center"
        sx={{
          justifyContent: { xs: 'center', sm: 'flex-end' },  
          mt: { xs: 1, sm: 0 } 
        }}
      >
        <IconButton>
          <PersonOutlinedIcon className='text-white' />
        </IconButton>
        {userName && (
          <Typography 
            variant="h6" 
            ml={1} 
            className='text-white font-kanit'
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, cursor: 'pointer' }} 
            onClick={() => navigate('/settings')} 
          >
            <i>
              {userName}
            </i>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
