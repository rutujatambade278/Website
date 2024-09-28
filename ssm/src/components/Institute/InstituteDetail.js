import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import API_BASE_URL from '../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const InstituteDetails = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAllInstitutes();
  }, []);

  const fetchAllInstitutes = async () => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/api/Institute/get/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInstitutes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching institutes:', error);
      setError('Failed to fetch institutes. Please try again.');
      setLoading(false);
    }
  };

  const handleDeleteInstitute = async (id) => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/api/Institute/deleteInstitute/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInstitutes(institutes.filter((institute) => institute.id !== id));
      setLoading(false);
    } catch (error) {
      console.error('Error deleting institute:', error);
      setError('Failed to delete institute. Please try again.');
      setLoading(false);
    }
  };

  const handleEditInstitute = (institute) => {
    setSelectedInstitute(institute);
    setShowModal(true);
  };

  const handleUpdateInstitute = async (updatedInstitute) => {
    setLoading(true);
    setError('');

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(
        `${API_BASE_URL}/api/Institute/updateInstitute/${updatedInstitute.id}`,
        updatedInstitute,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Institute updated successfully:', response.data);
      fetchAllInstitutes(); // Refresh institutes
      setShowModal(false); // Hide modal after update
    } catch (error) {
      console.error('Error updating institute:', error);
      setError('Failed to update institute. Please try again.');
    } finally {
      setLoading(false);
      setSelectedInstitute(null); // Clear selectedInstitute after update or cancel
    }
  };

  const handleCancelUpdate = () => {
    setSelectedInstitute(null); // Clear selectedInstitute to cancel update
    setShowModal(false); // Hide modal on cancel
  };

  return (
    <Container>
      <h2>Institute Details</h2>

      {loading ? (
        <p>Loading institutes...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {institutes.map((institute) => (
                <tr key={institute.id}>
                  <td>{institute.name}</td>
                  <td>{institute.email}</td>
                  <td>{institute.moNumber}</td>
                  <td>{institute.description}</td>
                  <td className="d-flex gap-3">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-primary"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleEditInstitute(institute)}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-danger"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteInstitute(institute.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Edit Institute */}
          {selectedInstitute && (
            <Modal show={showModal} onHide={handleCancelUpdate} centered>
              <Modal.Header closeButton>
                <Modal.Title>Edit Institute</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={() => handleUpdateInstitute(selectedInstitute)}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedInstitute.name}
                      onChange={(e) =>
                        setSelectedInstitute({ ...selectedInstitute, name: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={selectedInstitute.email}
                      onChange={(e) =>
                        setSelectedInstitute({ ...selectedInstitute, email: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="moNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedInstitute.moNumber}
                      onChange={(e) =>
                        setSelectedInstitute({ ...selectedInstitute, moNumber: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={selectedInstitute.description}
                      onChange={(e) =>
                        setSelectedInstitute({ ...selectedInstitute, description: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update Institute
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

export default InstituteDetails;
