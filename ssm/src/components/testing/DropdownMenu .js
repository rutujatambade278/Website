import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const StyledMenu = styled(Menu)({
  pointerEvents: 'none', // Prevent menu from being clicked
  '.MuiPaper-root': {
    pointerEvents: 'auto' // Enable menu items to be clicked
  }
});

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        Hover Menu
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
      >
        <MenuItem onClick={handleMouseLeave}>Profile</MenuItem>
        <MenuItem onClick={handleMouseLeave}>My account</MenuItem>
        <MenuItem onClick={handleMouseLeave}>Logout</MenuItem>
      </StyledMenu>
    </div>
  );
}

export default DropdownMenu;
