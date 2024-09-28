import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";
import API_BASE_URL from './Api'; // Ensure API_BASE_URL is correctly imported

const Upcoming_Batches = () => {
  const [upcomingBatches, setUpcomingBatches] = useState([]);

  useEffect(() => {
    fetchUpcomingBatches();
  }, []);

  const fetchUpcomingBatches = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/upcomingbatch/get/getAllUpcomingBatch`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch upcoming batches');
      }

      const data = await response.json();
      setUpcomingBatches(data);
    } catch (error) {
      console.error('Error fetching upcoming batches:', error.message);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-center text-center mt-1">
        <h3><span className='logocolor1'>Up Coming :</span><span className='logocolor2'>Batches</span></h3>
      </div>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Time</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBatches.map((item, index) => (
            <tr key={index}>
              <td>{item.courseName}</td>
              <td>{item.duration}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <div className='text-center mt-2'>
                  <Button className='logobgcolor2' href={item.enroll} style={{ border: 'none'}} size="sm">
                    <FaArrowAltCircleRight size={20}/> Book Now
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Upcoming_Batches;
