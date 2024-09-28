import React, { useState } from 'react';
import './Mernstack.css'; // Import your custom CSS file
import { FaCertificate, FaUserGraduate, FaBriefcase, FaProjectDiagram, FaChalkboardTeacher, FaHandshake, FaTasks, FaClock, FaStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function MernStack() {
    const [displaySkills, setDisplaySkills] = useState(true);

    const toggleDisplay = () => {
        setDisplaySkills(!displaySkills);
    };
   
   

    return (
        <>
        <div className="container">
    
            <div className="justify-content-md-center"> 
                <br></br>
            <h1 className='Title'>MERNSTACK TRAINING INSTITUTE IN PUNE<b /></h1>
            <div className="course-info">
                <h2>Course Overview</h2>
                <p>
                The MEAN stack is a popular and powerful web development framework that 
                combines four key technologies: MongoDB, Express.js, AngularJS (now known as Angular), and Node.js. This comprehensive course provides an in-depth exploration of the MEAN stack, equipping students with the knowledge 
                and practical skills necessary to develop modern, full-stack web applications.    </p>
                <br></br>
                <div className="enroll-now">
          <Link to='/enquiryform'>
            <button className="enroll-now-button">Enroll Now</button>
          </Link>
          </div>
</div>
<br></br>
            </div>
            </div>
  
                <div className="key-highlights">
                    <h2>Key Highlights</h2>
                    <div className="highlight-grid">
                        <div className="highlight-item">
                            <FaCertificate size={80} />
                            <p>Certification</p>
                        </div>
                        <div className="highlight-item">
                            <FaUserGraduate size={80} />
                            <p>Mentor Support</p>
                        </div>
                        <div className="highlight-item">
                            <FaBriefcase size={80} />
                            <p>100% Job Assistance</p>
                        </div>
                        <div className="highlight-item">
                            <FaProjectDiagram size={80} />
                            <p>Projects and Assignments</p>
                        </div>
                        <div className="highlight-item">
                            <FaChalkboardTeacher size={80} />
                            <p>Interview Preparation</p>
                        </div>
                        <div className="highlight-item">
                            <FaHandshake size={80} />
                            <p>Hands-on Experience</p>
                        </div>
                        <div className="highlight-item">
                            <FaTasks size={80} />
                            <p>Comprehensive Coverage</p>
                        </div>
                        <div className="highlight-item">
                            <FaClock size={80} />
                            <p>Flexible Learning Options</p>
                        </div>
                    </div>
                </div>
                <div className="Mern-card ">
                    <h2>Learn MEAN Stack</h2>
                    <p >
                        Our MEAN Stack course offers comprehensive training on the popular web development stack comprising MongoDB, Express.
                    js, Angular, and Node.js. Gain proficiency in building dynamic web applications using these cutting-edge technologies and frameworks.
                    </p>
                    <div className="rating justify-content-center">
                        <p>5.0</p>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div><br></br>
                        <p>332 reviews</p>
                    </div>
                    <div className="enroll-now">
                    <Link to='/enquiryform'>
                    <button className="enroll-now-buttons-4">Enquiry Now</button>
                    </Link>
                        <button>Call Us Now</button>
                    </div>
                </div>
                <div className="course-overview-container">
                    <div className="course-overview">
                        <h2>MEAN Stack Course Overview</h2>
                        <p>
                            The “MEAN Stack Development” course provides comprehensive training on building web applications using the MEAN stack, which is an acronym for MongoDB, Express.js, Angular, and Node.js. This course is suitable for individuals who want to become full-stack web developers or enhance their skills in developing modern web applications.
                            The course combines theoretical learning with hands-on practical exercises. Students will have access to online tutorials, code samples, and assignments. They will work on individual and group projects to apply the concepts learned and gain practical experience with the MEAN stack. The course may also include guest lectures from industry experts and opportunities for networking.
                            Upon completing the course, students will have a strong foundation in MEAN stack development. They will be proficient in building web applications using MongoDB as the database, Express.js as the back-end framework, Angular as the front-end framework, and Node.js as the server-side runtime environment. Students will be able to develop and deploy full-stack applications, implement RESTful APIs, and handle data flow between the client and server.
                           </p>
                    </div>
                    <div className="skills-gain">
                        <h2>Skills you'll gain</h2>
                        <ul>
                            <li>MongoDB database integration</li>
                            <li>Express.js framework for server-side development</li>
                            <li>Angular framework for building dynamic web applications</li>
                            <li>Node.js runtime environment for server-side JavaScript</li>
                            <li>Building RESTful APIs</li>
                            <li>Single-page application (SPA) development</li>
                            <li>User authentication and authorization</li>
                            <li>Front-end and back-end integration</li>
                            <li>Data modeling and manipulation with MongoDB</li>
                            <li>Full-stack application development using the MEAN stack</li>
                        </ul>
                    </div>
                </div>
                
                <Container className="d-flex justify-content-center align-items-center ">
        <div className="card">
      <h3>Course Objectives</h3><br />
      <div className="Mernstack-card " style={{ width: "80rem" }}>
        <div className="course-info">
          <h2>Advance MernStack Programming</h2>
          <h4>Course Duration: 100 HOURS</h4>
          <div>
            <img src="../image/mern.png" width="100" height="100" alt="MernStack Logo" />
          </div><br />
        </div>
        <div className="skills-toggle" data-toggle-box>
          <button
            className={`toggle-btn ${displaySkills ? 'active' : ''}`}
            data-toggle-btn
            onClick={toggleDisplay}
          >
            Advance
          </button>
          <button
            className={`toggle-btn ${!displaySkills ? 'active' : ''}`}
            data-toggle-btn
            onClick={toggleDisplay}
          >
            Basic
          </button><br />
        </div>
    </div>
    

    

                        <div className="skills-box" data-skills-box>
                            {displaySkills ? (
                                <div className="skills-list">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><b>MongoDB - NoSQL Database</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Introduction to MongoDB</li>
                                                    <li>CRUD Operations</li>
                                                    <li>Aggregation Framework</li>
                                                    <li>Indexing</li>
                                                    <li>Data Modeling</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><b>Express.js - Back-end Framework</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Introduction to Express.js</li>
                                                    <li>Middleware</li>
                                                    <li>Routing</li>
                                                    <li>Template Engines</li>
                                                    <li>Error Handling</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><b>Angular - Front-end Framework</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Introduction to Angular</li>
                                                    <li>Components and Modules</li>
                                                    <li>Data Binding</li>
                                                    <li>Directives and Pipes</li>
                                                    <li>Routing and Navigation</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header><b>Node.js - JavaScript Runtime</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Introduction to Node.js</li>
                                                    <li>Modules and Packages</li>
                                                    <li>File System</li>
                                                    <li>Event Loop</li>
                                                    <li>Asynchronous Programming</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header><b>Full-Stack Integration</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Building RESTful APIs</li>
                                                    <li>Connecting Front-end with Back-end</li>
                                                    <li>Authentication and Authorization</li>
                                                    <li>Deployment Strategies</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            ) : (
                                <div className="skills-list">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><b>JavaScript Basics</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Syntax and Operators</li>
                                                    <li>Control Structures</li>
                                                    <li>Data Types</li>
                                                    <li>Functions</li>
                                                    <li>DOM Manipulation</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><b>HTML & CSS</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>HTML Elements and Attributes</li>
                                                    <li>CSS Selectors and Properties</li>
                                                    <li>Responsive Design</li>
                                                    <li>Flexbox and Grid</li>
                                                    <li>Basic Layouts</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><b>Basic Git and GitHub</b></Accordion.Header>
                                            <Accordion.Body style={{ textAlign: 'left' }}>
                                                <ul style={{ paddingLeft: 0 }}>
                                                    <li>Version Control</li>
                                                    <li>Repositories</li>
                                                    <li>Commit and Push</li>
                                                    <li>Branching and Merging</li>
                                                    <li>Collaboration</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            )}
                        </div>
                        </div>
                        </Container>
                        <div class="course-eligibility">
          <div class="eligibility">
            <h2>Who can apply for the course?</h2>
            <h5>The MEAN Stack course is designed for individuals who want to learn 
                full-stack web development using the MEAN Stack, which includes 
                MongoDB, Express.js, AngularJS (now Angular), and Node.js. 
                It is suitable for a variety of individuals, including <br></br>
          </h5>  <br></br>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>Web Devloper</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Individuals with basic knowledge of web development technologies 
                        like HTML, CSS, and JavaScript who want to expand their skills to build dynamic
                         and robust web applications using the MEAN Stack. </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>Student</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Students pursuing degrees or certifications in computer science, software engineering, or related fields who want to gain practical skills in 
                        full-stack web development using MEAN Stack technologies.      
                            </li></ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><b>Experience MernStack Devloper</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Programmers who are already familiar with MernStack but want to deepen their knowledge and explore advanced topics and best practices.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><b>Professional Software Engineer</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Individuals who have no prior programming experience and want to start their programming journey with MernStack.
                      Professionals working in the software development industry who want to add MernStack to their skillset or update their MernStack knowledge.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header><b>Enthusiasts And Self-Learner</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Individuals interested in programming and specifically Python, regardless of their professional background.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>
          </div>
          <div class="images">
            <img src="../image/girl1.png" alt="Professionals Image" />
          </div>
        </div>
        <div className="faq-container">
            <div className="faq-image">
                <img src="../image/student quations.png" alt="FAQ" />
            </div>
            <div className="faq-content">
                <h2>Frequently Asked Questions</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who is this MEAN Stack Development course suitable for?</Accordion.Header>
                        <Accordion.Body>
                            This course is suitable for both beginners and experienced developers who want to learn how to develop full-stack web applications using the MEAN stack. It is ideal for web developers, software engineers, and anyone interested in learning modern web development technologies.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What prerequisites are required to enroll in this course?</Accordion.Header>
                        <Accordion.Body>
                            To enroll in this course, students should have a basic understanding of HTML, CSS, and JavaScript. Familiarity with web development concepts and programming principles will be beneficial.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How long is the course duration?</Accordion.Header>
                        <Accordion.Body>
                            The course duration is 100 hours.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Will I receive a certificate upon completion of the course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you will receive a certificate upon successful completion of the course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Are there any assessments or exams during the course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, there will be assessments and exams during the course to evaluate your understanding and skills.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What support will be provided during the course?</Accordion.Header>
                        <Accordion.Body>
                            You will receive mentor support, access to online tutorials, code samples, and assignments. You will also have opportunities for networking and guest lectures from industry experts.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Will I be able to build real-world applications after completing this course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you will be able to build real-world applications using the MEAN stack after completing this course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Is job placement assistance provided after completing the course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, job placement assistance is provided to help you find suitable job opportunities after completing the course.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
                    
                
            {/* </div> */}
            
         {/* </div> */}
        </>
    );
}

