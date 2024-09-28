import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from './Api'; // Import the API_BASE_URL

const GetContact = () => {
  const [enquiryData, setEnquiryData] = useState([]);
  const [loading, setLoading] = useState(true); 

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

      const response = await axios.get(`${API_BASE_URL}/api/contactus/getAllContactDetails`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      setEnquiryData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Contact Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {enquiryData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNo}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetContact;
