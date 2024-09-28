import React, { useState } from 'react';
import axios from 'axios';
import './AddCourse.css';
import API_BASE_URL from '../Api.js';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons from react-icons

const AddCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    cost: '',
    duration: '',
    certification: '',
    image: '',
    link: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({
      ...courseDetails,
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
      const response = await axios.post(`${API_BASE_URL}/api/course/addCourseDetails`, courseDetails, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Course added successfully:', response.data);
      setCourseDetails({
        courseName: '',
        cost: '',
        duration: '',
        certification: '',
        image: '',
        link: ''
      });
      setSuccess('Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error);
      setError('Failed to add course. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const { courseName, cost, duration, certification, image, link } = courseDetails;
    return courseName && cost && duration && certification && image && link;
  };

  return (
    <div className="course-form">
      <h2>Manage Courses</h2>

      <form className="card" onSubmit={handleSubmit}>
        <h3>Add Course</h3>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <div className="form-group">
          <label>Course Name:</label>
          <input type="text" name="courseName" value={courseDetails.courseName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cost:</label>
          <input type="text" name="cost" value={courseDetails.cost} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" name="duration" value={courseDetails.duration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Certification:</label>
          <input type="text" name="certification" value={courseDetails.certification} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" name="image" value={courseDetails.image} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Link:</label>
          <input type="text" name="link" value={courseDetails.link} onChange={handleChange} required />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Course'}</button>
          <div className="icons">
            <FaEdit className="icon" title="Edit" /><br></br>
            <FaTrash className="icon" title="Delete" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
