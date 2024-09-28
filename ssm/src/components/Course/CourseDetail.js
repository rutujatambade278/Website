import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddCourse.css';
import API_BASE_URL from '../Api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CourseDetail = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [showModal, setShowModal] = useState(false); 
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      if (!token) {
        setError('Authentication token is missing. Please log in.');
        return;
      }
      const response = await axios.get(`${API_BASE_URL}/api/course/getAllCourses`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      setError('Failed to fetch courses. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.delete(`${API_BASE_URL}/api/course/Deletecourse/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Course deleted successfully:', response.data);
      setMessage(response.data.message);
      fetchCourses(); 
    } catch (error) {
      console.error('There was an error deleting the course:', error);
      if (error.response) {
       
        setError(error.response.data.message || 'Failed to delete course. Please try again.');
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        // Something else caused the error
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setShowModal(true); // Show the modal on edit click
  };

  const handleUpdateCourse = async (updatedCourse) => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      const response = await axios.put(`${API_BASE_URL}/api/course/updateCourse/${updatedCourse.id}`, updatedCourse, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Course updated successfully:', response.data);
      setMessage('Course updated successfully!');
      fetchCourses(); // Refresh courses list
      setShowModal(false); // Hide the modal after update
    } catch (error) {
      console.error('There was an error updating the course:', error);
      if (error.response) {
        // Server responded with a status other than 2xx
        setError(error.response.data.message || 'Failed to update course. Please try again.');
      } else if (error.request) {
        // Request was made but no response was received
        setError('No response from server. Please try again later.');
      } else {
        // Something else caused the error
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
      setSelectedCourse(null); // Clear selectedCourse after update or cancel
    }
  };

  const handleCancelUpdate = () => {
    setSelectedCourse(null); // Clear selectedCourse to cancel update
    setShowModal(false); // Hide the modal on cancel
  };

  return (
    <div className="course-table">
      <h2>Manage Courses</h2>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Cost</th>
            <th>Duration</th>
            <th>Certification</th>
            <th>Image</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.courseName}</td>
              <td>{course.cost}</td>
              <td>{course.duration}</td>
              <td>{course.certification}</td>
              <td><img src={course.image} alt={course.courseName} style={{ width: '100px' }} /></td>
              <td><a href={course.link} target="_blank" rel="noopener noreferrer">View Course</a></td>
              <td className='d-flex gap-3'>
                <FontAwesomeIcon icon={faEdit} className="text-primary mr-2" style={{ cursor: 'pointer' }} onClick={() => handleEditCourse(course)} />
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDeleteCourse(course.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Edit Course */}
      {selectedCourse && (
        <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Course</h5>
                <button type="button" className="close" onClick={handleCancelUpdate} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={() => handleUpdateCourse(selectedCourse)}>
                  <div className="form-group">
                    <label>Course Name:</label>
                    <input type="text" className="form-control" value={selectedCourse.courseName} onChange={(e) => setSelectedCourse({ ...selectedCourse, courseName: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Cost:</label>
                    <input type="text" className="form-control" value={selectedCourse.cost} onChange={(e) => setSelectedCourse({ ...selectedCourse, cost: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Duration:</label>
                    <input type="text" className="form-control" value={selectedCourse.duration} onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Certification:</label>
                    <input type="text" className="form-control" value={selectedCourse.certification} onChange={(e) => setSelectedCourse({ ...selectedCourse, certification: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Image URL:</label>
                    <input type="text" className="form-control" value={selectedCourse.image} onChange={(e) => setSelectedCourse({ ...selectedCourse, image: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Link:</label>
                    <input type="text" className="form-control" value={selectedCourse.link} onChange={(e) => setSelectedCourse({ ...selectedCourse, link: e.target.value })} required />
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Update</button>
                   </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {message && <p>{message}</p>}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default CourseDetail;
