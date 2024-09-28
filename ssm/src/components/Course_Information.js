import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsStopwatch } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import './course_inofrmation.css'; // Ensure correct CSS file import
import API_BASE_URL from './Api'; // Assuming API_BASE_URL is correctly defined
import SocialMediaIcons from './SocialMediaIcons';

const CourseInformation = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/course/Get/getAllCourses`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }

      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error.message);
    }
  };

  const CourseCard = ({ course }) => (
    <Card className="mt-2 justify-content-center">
      <Card.Body>
        <div className='d-flex justify-content-center'>
          <img className='' src={course.image} alt={course.courseName} width="120" height="90" />
        </div>
        <h4 className='p-0 mt-1 text-center logocolor2'>{course.courseName}</h4>
        <div className='d-flex justify-content-center'>
          <ListGroup>
            <ListGroup.Item><RiMoneyRupeeCircleFill size={21} color='#F05A28' /><span> Cost: </span>{course.cost}</ListGroup.Item>
            <ListGroup.Item><BsStopwatch size={21} color='#F05A28' /> <span>Duration: </span>{course.duration}</ListGroup.Item>
            <ListGroup.Item> <PiCertificate size={21} color='#F05A28' /><span> Certification:</span> {course.certification}</ListGroup.Item>
          </ListGroup>
        </div>
        <div className='text-center mt-2'>
          <Button className='logobgcolor1' size="sm" href={course.link} style={{ border: 'none'}}><FaArrowAltCircleRight size={20} /> Book Now</Button>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className='mt-5 mb-5'>
      <hr className="hr-text" data-content="" />
      <Row>
        {courses.map(course => (
          <Col key={course.id} sm={12} md={6} lg={4}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
      <SocialMediaIcons />
    </Container>
  );
};

export default CourseInformation;
