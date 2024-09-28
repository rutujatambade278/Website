
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, TextField, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
  Select, MenuItem,
} from '@mui/material';
import API_BASE_URL from './Api';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetEnquiry = () => {
  const [enquiryData, setEnquiryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTechnology, setSearchTechnology] = useState('');
  const [statusOptions] = useState(['Call received', 'Not received', 'Rejected']);
  const [enquiryModeOptions] = useState(['Online', 'Offline']);
  const [editMode, setEditMode] = useState(false);
  const [editEnquiry, setEditEnquiry] = useState({
    id: '',
    name: '',
    phoneNo: '',
    email: '',
    message: '',
    technology: '',
    status: '',
    studentFeedback: '',
    enquiryMode: '',
    description: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Authentication token is missing. Please log in.');
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/api/enquiry/getAllEnquiry`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        setEnquiryData(response.data);
      } else {
        setEnquiryData([]);
      }
    } catch (error) {
      console.error('Error fetching enquiry data:', error);
      setEnquiryData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTechnology) return;

    setLoading(true);

    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Authentication token is missing. Please log in.');
        return;
      }

      const response = await axios.get(
        `${API_BASE_URL}/api/enquiry/searchEnquiryByTechnology?technology=${searchTechnology}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (Array.isArray(response.data)) {
        setEnquiryData(response.data);
      } else {
        setEnquiryData([]);
      }
    } catch (error) {
      console.error('Error fetching enquiry data:', error);
      setEnquiryData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    const enquiryToEdit = enquiryData.find(item => item.id === id);
    if (enquiryToEdit) {
      setEditEnquiry(enquiryToEdit);
      setEditMode(true);
    } else {
      console.error(`Enquiry with ID ${id} not found.`);
    }
  };

  const handleSave = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Authentication token is missing. Please log in.');
        return;
      }

      const response = await axios.put(
        `${API_BASE_URL}/api/enquiry/updateEnquiry/${editEnquiry.id}`,
        editEnquiry,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('Enquiry updated successfully:', response.data);
      fetchData();
      setEditMode(false);
      setEditEnquiry({
        id: '',
        name: '',
        phoneNo: '',
        email: '',
        message: '',
        technology: '',
        status: '',
        studentFeedback: '',
        enquiryMode: '',
        description: '',
      });
    } catch (error) {
      console.error('Error updating enquiry:', error);
    }
  };

  const handleChange = (e) => {
    setEditEnquiry({
      ...editEnquiry,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditEnquiry({
      id: '',
      name: '',
      phoneNo: '',
      email: '',
      message: '',
      technology: '',
      status: '',
      studentFeedback: '',
      enquiryMode: '',
      description: '',
    });
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Enquiry Data
      </Typography>
      <div>
        <TextField
          label="Search by Technology"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTechnology}
          onChange={(e) => setSearchTechnology(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ mt: 2, mb: 4 }}
        >
          Search
        </Button>
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table className="table table-striped">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone No</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Technology</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Student Feedback</TableCell>
                  <TableCell>Enquiry Mode</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {enquiryData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.phoneNo}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{item.technology}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.studentFeedback}</TableCell>
                    <TableCell>{item.enquiryMode}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {editMode && (
            <Paper sx={{ mt: 4, p: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Edit Enquiry
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>ID:</TableCell>
                      <TableCell>
                        <TextField
                          name="id"
                          value={editEnquiry.id}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          disabled
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Name:</TableCell>
                      <TableCell>
                        <TextField
                          name="name"
                          value={editEnquiry.name}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phone No:</TableCell>
                      <TableCell>
                        <TextField
                          name="phoneNo"
                          value={editEnquiry.phoneNo}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email:</TableCell>
                      <TableCell>
                        <TextField
                          name="email"
                          value={editEnquiry.email}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Message:</TableCell>
                      <TableCell>
                        <TextField
                          name="message"
                          value={editEnquiry.message}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Technology:</TableCell>
                      <TableCell>
                        <TextField
                          name="technology"
                          value={editEnquiry.technology}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status:</TableCell>
                      <TableCell>
                        <Select
                          name="status"
                          value={editEnquiry.status}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                        >
                          {statusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Student Feedback:</TableCell>
                      <TableCell>
                        <TextField
                          name="studentFeedback"
                          value={editEnquiry.studentFeedback}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Enquiry Mode:</TableCell>
                      <TableCell>
                        <Select
                          name="enquiryMode"
                          value={editEnquiry.enquiryMode}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                        >
                          {enquiryModeOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Description:</TableCell>
                      <TableCell>
                        <TextField
                          name="description"
                          value={editEnquiry.description}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 2, mr: 2 }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancelEdit}
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
            </Paper>
          )}
        </>
      )}
    </Container>
  );
};

export default GetEnquiry;
