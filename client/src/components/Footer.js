// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body1">© 2023 Stock Market Insights. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
