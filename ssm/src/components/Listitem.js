import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { FaTh, FaUserAlt, FaEnvelope, FaQuestionCircle, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { RiShutDownLine } from 'react-icons/ri';

// Main List Items
export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <FaTh />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  
    <ListItemButton component={Link} to="/dashboard/emp">
      <ListItemIcon>
        <FaUserAlt />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/GetContact">
      <ListItemIcon>
        <FaEnvelope />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/GetEnquiry">
      <ListItemIcon>
        <FaQuestionCircle />
      </ListItemIcon>
      <ListItemText primary="Enquiry" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/CourseButton">
      <ListItemIcon>
        <FaBook />
      </ListItemIcon>
      <ListItemText primary="Course" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/CourseButtonBatch">
      <ListItemIcon>
        <FaChalkboardTeacher />
      </ListItemIcon>
      <ListItemText primary="CourseBatch" />
    </ListItemButton>

    <ListItemButton component={Link} to="/dashboard/InstituteButton">
      <ListItemIcon>
        <FaChalkboardTeacher />
      </ListItemIcon>
      <ListItemText primary="Institute Profile" />
    </ListItemButton>
  </React.Fragment>
);

// Function to handle logout
const handleLogout = () => {
  // Clear session storage or perform logout actions
  sessionStorage.removeItem('token'); // Example: Remove token from session storage

  // Redirect to login page
  window.location.href = '/login';
};

// Secondary List Items (Logout Button)
export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <RiShutDownLine />
      </ListItemIcon>
      <ListItemText primary="LOGOUT" />
    </ListItemButton>
  </React.Fragment>
);

export default mainListItems; // Export mainListItems for usage in other components
