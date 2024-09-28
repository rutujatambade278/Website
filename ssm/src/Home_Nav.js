import './homenav.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';


import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// import Link from '@mui/material/Link';




function Home_Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages1 = [
    { text: 'Home', path: '/',cevent:handleCloseNavMenu },
    { text: 'About Us', path: '/aboutus',cevent:handleCloseNavMenu },
    { text: 'Courses', path: '/courses',cevent:handleCloseNavMenu },
    { text: 'Our Placemet', path: '/placement',cevent:handleCloseNavMenu },
    { text: 'Contact Us', path: '/contactus',cevent:handleCloseNavMenu},
    // {text:'socialMediaIcons',path:'/socialmedia',cevent:handleCloseNavMenu}
  ];
  
  const darkTheme = createTheme({
    palette: {
      //  mode: 'dark',
    primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  const StyledMenu = styled(Menu)({
    pointerEvents: 'none', // Prevent menu from being clicked
    '.MuiPaper-root': {
      pointerEvents: handleClick // Enable menu items to be clicked
    }
  });
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" enableColorOnDark sx={{ height: '70px' }}>
         
      <Container maxWidth="xl">
 
        <Toolbar  disableGutters>
        {/* <Link href="/" underline="none" sx={{bgcolor:'white', md: 'flex',width:'15%',height:'60%'}}> */}
        <img className="imagelogo" src="logo/VTECH ACADEMY-03.JPG" />
       
        
         
        
          <Box  component="div"
            className='' 
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color=""
            >
              <MenuIcon sx={{color:'#03a9f4'}}/>
            </IconButton>
            {/* side bar menu */}
            
            <Menu
            display="flex"
           
            component="div"
           className=''
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block'},
                '& .MuiPaper-root': {
                    backgroundColor: '', // Change this to your desired color
                  },
                 
              }}
            >


{pages1.map((page,index) => (
              <MenuItem
              component={Link} 
              to={page.path}
              className="sidebartextalign sidebar"
                key={index}
                onClick={page.cevent}
                

                sx={{ my: 2, color: '#0078C9', display: 'block','&:hover': {
                    bgcolor: "#81d4fa",color:'#F05A28','&::first-letter': {
                      color: '#0078C9'
                    }
                  } }}
               >
                <Typography  textAlign="center" className='firstletter'> {page.text}
                </Typography>
              </MenuItem>
            ))} 
       
            </Menu>
         
            {/* end of side bar menu */}
          </Box>

                    {/* side bar icon */}
       
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           {/* <Link href="/" underline="none" sx={{bgcolor:'white', xs: 'flex',md: 'none',width:'60%',height:'60%',borderRadius: '8px',mt:1,ml:1}}> */}
           <img className="sidebarimagelogo" src="logo/VTECH ACADEMY-03.JPG" />
      
      {/* </Link> */}
          </Typography>

          
           {/* end of side bar icon */}

           {/* outer navigation */}
          <Box  component="div"  justifyContent="right" alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            
            {pages1.map((page,index) => (
              <Button
              component={Link} 
              to={page.path}
              className=""
                key={index}
                onClick={page.cevent}
               sx={{ mr:5,my: 2, color: '#0078C9', display: 'block','&:hover': {
                  bgcolor: "#81d4fa",color:'#F05A28','&::first-letter': {
                    color: '#0078C9'
                  
                  }
                }  }}
               >
               
                {page.text}
              
              </Button>
            ))} 
        


          </Box>
        {/* login button */}
          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Sign In">
              <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 ,'&::first-letter': {
                      color: '#0078C9'
                    }}}>
              <Button  variant="outlined" color="error" sx={{color:'#F05A28',border:2,}} component={Link} 
              to='/login' >Login</Button>
                <Button  variant="outlined" color="error" sx={{color:'#F05A28',border:2,}} component={Link} 
              to='/login' >get</Button>
             
              </IconButton>
            </Tooltip>
          
          </Box>
        </Toolbar>
      </Container>
    


      <React.Fragment>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>

    </AppBar>
    </ThemeProvider>
  );
}
export default Home_Nav;
