import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
     <Stack direction="row">

      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} /> 
      <Typography variant="h3" sx={{ fontSize: { lg: '40px', xs: '20px' } }} m="25px" textAlign="center">
        Fit-App
        </Typography>
     </Stack>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Wass</Typography>
  </Box>
);

export default Footer;
