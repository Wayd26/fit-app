import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#0F91F1" fontWeight="600" fontSize="40px">Fit App</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '40px' } }} mb="10px" mt="20px">
            Breathe, Exercise <br />
            And Live
        </Typography>
        <Stack>
            <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0F91F1', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={600} color="#0F91F1" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
);

export default HeroBanner;
