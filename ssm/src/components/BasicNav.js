import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Logo"
              style={{ maxHeight: 50, marginRight: 16 }}
            />
            <Typography variant="h6" noWrap>
              MyApp
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <Typography variant="button" key={item} sx={{ margin: '0 10px' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
          Welcome to MyApp
        </Typography>
        <Typography variant="body1" component="div" sx={{ textAlign: 'center', marginTop: 2 }}>
          This is a sample application to demonstrate a responsive navigation bar with an image.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
