import './ButtonEx.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BentoRoundedIcon from '@mui/icons-material/BentoRounded';
import { Link, Outlet } from 'react-router-dom';
import BatchDetails from './BatchDetails';

export default function CourseButtonBatch() {
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
            component={Link}
            to="/dashboard/BatchDetails"
            onClick={() => handleButtonClick('Courses')}
          >
            <span><BentoRoundedIcon sx={{ fontSize: 22 }} /> Batches Details</span>
          </Button>
          <Button
            className={activeButton === 'new' ? 'btn1 active' : 'btn1'}
            component={Link}
            to="/dashboard/AddBatchs"
            onClick={() => handleButtonClick('new')}
          >
            <span><AddCircleIcon sx={{ fontSize: 22 }} /> Add Batch</span>
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <BatchDetails></BatchDetails>
        <Outlet />
      </div>
    </div>
  );
}
