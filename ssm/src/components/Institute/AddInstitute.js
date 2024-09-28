import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Api';

const AddInstitute = ({ fetchInstitutes }) => {
  const [instituteDetails, setInstituteDetails] = useState({
    name: '',
    email: '',
    moNumber: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstituteDetails({ ...instituteDetails, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!instituteDetails.name) tempErrors.name = 'Name is required';
    if (!instituteDetails.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(instituteDetails.email)) tempErrors.email = 'Email is invalid';
    if (!instituteDetails.moNumber) tempErrors.moNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(instituteDetails.moNumber)) tempErrors.moNumber = 'Mobile number is invalid';
    if (!instituteDetails.description) tempErrors.description = 'Description is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.post(`${API_BASE_URL}/api/institute/addInstituteProfile`, instituteDetails, {
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
      fetchInstitutes(); // Refresh the list of institutes
    } catch (error) {
      console.error('There was an error adding the institute:', error);
      alert('Failed to add institute. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="institute-form">
      <h2>Manage Institutes</h2>
      <form className="card" onSubmit={handleSubmit}>
        <h3>Add Institute</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={instituteDetails.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={instituteDetails.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="moNumber"
            value={instituteDetails.moNumber}
            onChange={handleChange}
            required
          />
          {errors.moNumber && <p className="error">{errors.moNumber}</p>}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={instituteDetails.description}
            onChange={handleChange}
            required
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Institute'}
        </button>
      </form>
    </div>
  );
};

export default AddInstitute;
