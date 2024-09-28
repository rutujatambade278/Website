// src/Courses.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Button, Menu, MenuItem } from '@mui/material';
import Course_Information from './Course_Information'
const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
}));

const courses = [
  {
    title: 'Mathematics',
    description: 'Learn the basics and advanced concepts of Mathematics.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Science',
    description: 'Explore the world of Physics, Chemistry, and Biology.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'History',
    description: 'Understand the historical events that shaped our world.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more courses as needed
];

  
const Courses = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      {/* <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div> */}
      
    <Root>
      <Container>
        <Typography variant="h2" gutterBottom align="center">
          Our Courses
        </Typography>
        <Course_Information></Course_Information>

        {/* <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={course.title}
                    height="140"
                    image={course.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Root>
    </ThemeProvider>
  );
};

export default Courses;
