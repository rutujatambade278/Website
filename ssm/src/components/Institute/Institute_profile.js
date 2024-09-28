import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddInstitute.css';
import API_BASE_URL from '../Api';


const Institute_profile = () => {
  const [instituteDetails, setInstituteDetails] = useState({
    name: '',
    email: '',
    moNumber: '',
    description: ''
  });
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInstitutes();
  }, []);

  const fetchInstitutes = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      if (!token) {
        setError('Authentication token is missing. Please log in.');
        return;
      }
      const response = await axios.get(`${API_BASE_URL}/api/Institute/getAllInstituteInfo`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setInstitutes(response.data);
    } catch (error) {
      console.error('Failed to fetch institutes:', error);
      setError('Failed to fetch institutes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstituteDetails({
      ...instituteDetails,
      [name]: value
    });
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.post(`${API_BASE_URL}/api/Institute/get/addInstituteProfile`, instituteDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Institute added successfully:', response.data);
      alert('Institute added successfully!');
      setInstituteDetails({
        name: '',
        email: '',
        moNumber: '',
        description: ''
      });
      fetchInstitutes(); 
    } catch (error) {
      console.error('There was an error adding the institute:', error);
      alert('Failed to add institute. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateInstitute = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.put(`${API_BASE_URL}/api/Institute/update/${id}`, instituteDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Institute updated successfully:', response.data);
      alert('Institute updated successfully!');
      setInstituteDetails({
        name: '',
        email: '',
        moNumber: '',
        description: ''
      });
      setId('');
      fetchInstitutes(); 
    } catch (error) {
      console.error('There was an error updating the institute:', error);
      alert('Failed to update institute. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInstitute = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.delete(`${API_BASE_URL}/api/Institute/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Institute deleted successfully:', response.data);
      setMessage(response.data.message);
      setId(''); 
      fetchInstitutes(); 
    } catch (error) {
      console.error('There was an error deleting the institute:', error);
      if (error.response) {
        
        setError(error.response.data.message || 'Failed to delete institute. Please try again.');
      } else if (error.request) {
        
        setError('No response from server. Please try again later.');
      } else {
        
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
   
    return true; 
  };

  return (
    <div className="institute-form">
      <h2>Manage Institutes</h2>

      <form className="card" onSubmit={handleSubmit}>
        <h3>Add Institute</h3>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={instituteDetails.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={instituteDetails.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="text" name="moNumber" value={instituteDetails.moNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={instituteDetails.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Institute'}</button>
      </form>

      <form className="card" onSubmit={handleUpdateInstitute}>
        <h3>Update Institute</h3>
        <div className="form-group">
          <label>Institute ID:</label>
          <input type="text" value={id} onChange={handleIdChange} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={instituteDetails.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={instituteDetails.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="text" name="moNumber" value={instituteDetails.moNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={instituteDetails.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Updating...' : 'Update Institute'}</button>
      </form>

      <div className="card">
        <h3>Delete Institute</h3>
        <form onSubmit={handleDeleteInstitute}>
          <div className="form-group">
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Deleting...' : 'Delete Institute'}</button>
        </form>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      <div className="card">
        <h3>Current Institutes</h3>
        <button onClick={fetchInstitutes} disabled={loading}>{loading ? 'Loading...' : 'Refresh Institutes'}</button>
        <ul>
          {institutes.map(institute => (
            <li key={institute.id}>
              {institute.name} - {institute.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Institute_profile;
