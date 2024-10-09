import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from "@mui/material";
import '../../src/index.css';

const Header = ({ title }) => {

  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        className=' font-kanit font-bold'

      >
        {title}
      </Typography>
    </Box>
  );
};

// Prop Types
Header.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default Header;
