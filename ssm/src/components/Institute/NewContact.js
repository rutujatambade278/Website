

import React, { useState, useEffect } from 'react';
import './NewContact.css';
import { IoCallOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

export default function NewContact() {
    const [instituteProfiles, setInstituteProfiles] = useState([]);

    // Function to fetch institute profiles from backend
    const fetchInstituteProfiles = async () => {
        try {
            const response = await axios.get('http://192.168.0.239:8585/api/Institute/get/getAll');
            setInstituteProfiles(response.data);
            console.log(response.data); 
        } catch (error) {
            console.error('Error fetching institute profiles:', error);
        }
    };

    useEffect(() => {
        fetchInstituteProfiles();
    }, []); 

    return (
        <Row className="header-icons">
            <Col xs={12}>
                <div className="header d-flex justify-content-center align-items-center t_bg1">
                    <Nav className="ms-auto">
                        {/* Render fetched institute profiles */}
                        {instituteProfiles.map(profile => (
                            <React.Fragment key={profile.id}>
                                <Nav.Link className="t_text1 icon-link" href={`tel:${profile.moNumber}`} title="Contact no.">
                                    <IoCallOutline className="icon" style={{ color: '#FFFFFF' }} />
                                    <span className="ms-1 d-none d-md-inline">{profile.moNumber}</span>
                                </Nav.Link>
                                <Nav.Link className="t_text1 icon-link" href={`mailto:${profile.email}`} title="Email">
                                    <FiMail className="icon" style={{ color: '#FFFFFF' }} />
                                    <span className="ms-1 d-none d-md-inline">{profile.email}</span>
                                </Nav.Link>
                                
                            </React.Fragment>
                        ))}
                    </Nav>
                </div>
            </Col>
        </Row>
    );
}
