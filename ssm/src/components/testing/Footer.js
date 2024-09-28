// src/Footer.js
import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { FaLocationDot } from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import theme from './theme';
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom className=''>
            Contact Details
            </Typography>
           <FaLocationDot /> Office No.5,Sawant Park,Balaji Nagar,Pune Satara Road,Pune, Maharashtra, 411043, IN
           <p><FaPhoneAlt /> </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <FooterLink href="#" underline="none">
              Help Center
            </FooterLink>
            <FooterLink href="#" underline="none">
              Contact Us
            </FooterLink>
            <FooterLink href="#" underline="none">
              Privacy Policy
            </FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
              <FooterLink href="#" underline="none">
                <FacebookIcon />
              </FooterLink>
              <FooterLink href="#" underline="none">
                <TwitterIcon />
              </FooterLink>
              <FooterLink href="#" underline="none">
                <InstagramIcon />
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
      </ThemeProvider>
  );
};

export default Footer;
