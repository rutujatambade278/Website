import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import API_BASE_URL from './Api'; // Ensure API_BASE_URL is correctly imported
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnquiryForm.css'; // Ensure correct CSS import

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    message: '',
    technology: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/enquiry/insert/addEnquiry`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Enquiry submitted successfully:', response.data);
      alert('Enquiry submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        message: '',
        technology: ''
      });
      setResponse({ message: 'Enquiry submitted successfully!' });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again later.');
      setResponse({ message: 'Failed to submit enquiry. Please try again later.' });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8" className="mx-auto">
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Card.Title className="text-center mb-4">Enquiry Form</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhoneNo">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formTechnology">
                  <Form.Label>Technology</Form.Label>
                  <Form.Control
                    type="text"
                    name="technology"
                    value={formData.technology}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Submit
                </Button>
              </Form>
              {response && <div className="mt-3">{response.message}</div>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryForm;
