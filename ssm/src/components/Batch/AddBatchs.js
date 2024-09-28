import React, { useState } from 'react';
import axios from 'axios';
import './AddBatch.css'; // Assuming you have a corresponding CSS file for styling
import API_BASE_URL from '../Api.js';

const AddBatchs = () => {
  const [batchDetails, setBatchDetails] = useState({
    courseName: '',
    duration: '',
    date: '',
    time: '',
    enroll: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatchDetails({
      ...batchDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!validate()) {
      setError('Please fill all fields correctly.');
      setLoading(false);
      return;
    }

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.post(`${API_BASE_URL}/api/upcomingbatch/addUpComingBatch`, batchDetails, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Batch added successfully:', response.data);
      setBatchDetails({
        courseName: '',
        duration: '',
        date: '',
        time: '',
        enroll: ''
      });
      setSuccess('Batch added successfully!');
    } catch (error) {
      console.error('Error adding batch:', error);
      setError('Failed to add batch. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const { courseName, duration, date, time, enroll } = batchDetails;
    return courseName && duration && date && time && enroll;
  };

  return (
    <div className="batch-form">
      <h2>Manage Batches</h2>

      <form className="card" onSubmit={handleSubmit}>
        <h3>Add Batch</h3>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <div className="form-group">
          <label>Course Name:</label>
          <input type="text" name="courseName" value={batchDetails.courseName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" name="duration" value={batchDetails.duration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={batchDetails.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={batchDetails.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Enrollment Link:</label>
          <input type="text" name="enroll" value={batchDetails.enroll} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Batch'}</button>
      </form>
    </div>
  );
};

export default AddBatchs;
