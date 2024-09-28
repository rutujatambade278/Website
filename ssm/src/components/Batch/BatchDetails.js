import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import API_BASE_URL from '../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './BatchDetails.css'; // Import your custom CSS file

const BatchDetails = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAllBatches();
  }, []);

  const fetchAllBatches = async () => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/api/upcomingbatch/getAllUpcomingBatch`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBatches(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching batches:', error);
      setError('Failed to fetch batches. Please try again.');
      setLoading(false);
    }
  };

  const handleDeleteBatch = async (id) => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/api/upcomingbatch/deleteUpComingBatch/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBatches(batches.filter((batch) => batch.id !== id));
      setLoading(false);
    } catch (error) {
      console.error('Error deleting batch:', error);
      setError('Failed to delete batch. Please try again.');
      setLoading(false);
    }
  };

  const handleEditBatch = (batch) => {
    setSelectedBatch(batch);
    setShowModal(true);
  };

  const handleUpdateBatch = async (updatedBatch) => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(`${API_BASE_URL}/api/upcomingbatch/updateCourseBatch/${updatedBatch.id}`, updatedBatch, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Batch updated successfully:', response.data);
      fetchAllBatches(); // Refresh batches
      setShowModal(false); // Hide modal after update
    } catch (error) {
      console.error('Error updating batch:', error);
      setError('Failed to update batch. Please try again.');
    } finally {
      setLoading(false);
      setSelectedBatch(null); // Clear selectedBatch after update or cancel
    }
  };

  const handleCancelUpdate = () => {
    setSelectedBatch(null); // Clear selectedBatch to cancel update
    setShowModal(false); // Hide modal on cancel
  };

  return (
    <Container>
      <h2>Batch Details</h2>

      {loading ? (
        <p>Loading batches...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Time</th>
                <th>Enrollment Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.id}>
                  <td>{batch.courseName}</td>
                  <td>{batch.duration}</td>
                  <td>{batch.date}</td>
                  <td>{batch.time}</td>
                  <td>
                    <a
                      href={batch.enroll}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {batch.enroll}
                    </a>
                  </td>
                  <td className="d-flex gap-3">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-primary"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleEditBatch(batch)}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-danger"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteBatch(batch.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Edit Batch */}
          {selectedBatch && (
            <Modal show={showModal} onHide={handleCancelUpdate} centered>
              <Modal.Header closeButton>
                <Modal.Title>Edit Batch</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={() => handleUpdateBatch(selectedBatch)}>
                  <Form.Group controlId="courseName">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedBatch.courseName}
                      onChange={(e) =>
                        setSelectedBatch({ ...selectedBatch, courseName: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedBatch.duration}
                      onChange={(e) =>
                        setSelectedBatch({ ...selectedBatch, duration: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={selectedBatch.date}
                      onChange={(e) =>
                        setSelectedBatch({ ...selectedBatch, date: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={selectedBatch.time}
                      onChange={(e) =>
                        setSelectedBatch({ ...selectedBatch, time: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="enrollLink">
                    <Form.Label>Enrollment Link</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedBatch.enroll}
                      onChange={(e) =>
                        setSelectedBatch({ ...selectedBatch, enroll: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update Batch
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
};

export default BatchDetails;
