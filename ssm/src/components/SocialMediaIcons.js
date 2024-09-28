import React from 'react';
import { Box, IconButton } from '@mui/material';
import { WhatsApp, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';

// Indian flag colors for the first icon
const IndianFlagBox = styled(Box)({
  background: 'linear-gradient(to right, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, rgba(17, 85, 244, 0.947) 66%)',
  borderRadius: '50%',
  padding: '5px', // Adjust padding to ensure proper spacing
});

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: 0,
  top: '40%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2), // Increased gap between icons for better spacing
  zIndex: 1000,
}));

const LargeIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '2.0rem', // Adjust the font size to make icons larger
  backgroundColor: 'white', // Set background color to white
  borderRadius: '50%', // Ensure icons are circular
  padding: '10px', // Adjust padding to ensure proper spacing
  '&:hover': {
    backgroundColor: 'white', // Keep background white on hover
  },
}));

const SocialMediaIcons = () => {
  return (
    <StyledBox>
      <IndianFlagBox>
        <LargeIconButton
          color="inherit"
          component="a"
          href="https://wa.me/YOURNUMBER"
          target="_blank"
        >
          <WhatsApp fontSize="inherit" style={{ color: '#25D366' }} />
        </LargeIconButton>
      </IndianFlagBox>
      <IndianFlagBox>
        <LargeIconButton
          color="inherit"
          component="a"
          href="https://www.facebook.com/YOURPAGE"
          target="_blank"
        >
          <Facebook fontSize="inherit" style={{ color: '#1877F2' }} />
        </LargeIconButton>
      </IndianFlagBox>
      <IndianFlagBox>
        <LargeIconButton
          color="inherit"
          component="a"
          href="https://www.instagram.com/YOURHANDLE"
          target="_blank"
        >
          <Instagram fontSize="inherit" style={{ color: '#E1306C' }} />
        </LargeIconButton>
      </IndianFlagBox>
      <IndianFlagBox>
        <LargeIconButton
          color="inherit"
          component="a"
          href="https://www.linkedin.com/in/YOURHANDLE"
          target="_blank"
        >
          <LinkedIn fontSize="inherit" style={{ color: '#0A66C2' }} />
        </LargeIconButton>
      </IndianFlagBox>
    </StyledBox>
  );
};

export default SocialMediaIcons;
