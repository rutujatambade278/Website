// src/components/GetInTouch.js

import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here, e.g., send data to an API
  };

  return (
    <Container>
      <h2>Get In Touch</h2>
      <p>At DomS IT Solutions Pvt. Ltd., we aim at providing innovative and impactful software development solutions that will help your businesses keep up with the changing technology trends.</p>
      <p><strong>Contact Us:</strong></p>
      <p>+918766512312</p>
      <p>Support@domsit.com</p>
      <p>Office No. 10, 2nd Floor , Patang Plaza -II, Opposite to PICT College, Trimurti Chowk, Ambegaon (BK) - Pune -46</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
