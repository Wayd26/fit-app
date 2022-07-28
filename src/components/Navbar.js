import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack 
        direction="row"
        justifyContent="space-around"
        sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}}
        px="20px"
        >
        <Link to="/">
            <img src={Logo} alt="logo" style={{width: 50, heigh: 50, margin: '0 20px'}} />
        </Link>
        <Stack
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end">
            <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #0F91F1'}}>Home</Link>
            <a href="#exercises" style={{textDecoration: 'none', color: '#000000'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar