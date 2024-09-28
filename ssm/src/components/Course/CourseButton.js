import './ButtonEx.css'; 
import * as React from 'react'; 
import Button from '@mui/material/Button'; 
import ButtonGroup from '@mui/material/ButtonGroup'; 
import AddCircleIcon from '@mui/icons-material/AddCircle'; 
import EditIcon from '@mui/icons-material/Edit'; 
import { Link, Outlet } from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search'; 
import BentoRoundedIcon from '@mui/icons-material/BentoRounded'; 
import CourseDetail from './CourseDetail';
 
export default function CourseButton() { 
  const [activeButton, setActiveButton] = React.useState(null); 
 
  const handleButtonClick = (buttonName) => { 
    setActiveButton(buttonName); 
  }; 
 
  return ( 
    <div> 
      <div> 
        <ButtonGroup variant="contained" aria-label="Basic button group"> 
        <Button 
            className={activeButton === 'Courses' ? 'btn1 active' : 'btn1'} 
            as={Link} 
            to='/dashboard/CourseDetail' 
            onClick={() => handleButtonClick('Courses')} 
          > 
            <span><BentoRoundedIcon sx={{ fontSize: 22 }} />Course Details</span> 
          </Button> 
          <Button 
            className={activeButton === 'new' ? 'btn1 active' : 'btn1'} 
            as={Link} 
            to='/dashboard/AddCourse' 
            onClick={() => handleButtonClick('new')} 
          > 
            <span><AddCircleIcon sx={{ fontSize: 22 }} /> Add Course</span> 
          </Button> 
       
          
        </ButtonGroup> 
      
      </div> 
      <div> 
        <CourseDetail></CourseDetail>
      <Outlet></Outlet>
      </div> 
    </div> 
  ); 
}