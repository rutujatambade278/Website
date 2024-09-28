import React, { useState } from 'react';
import './pythonPage.css';
import { FaCertificate, FaUserGraduate, FaBriefcase, FaProjectDiagram, FaChalkboardTeacher, FaHandshake, FaTasks, FaClock, FaStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function PythonPage() {

 const [displaySkills, setDisplaySkills] = useState(true);

 const toggleDisplay = () => {
     setDisplaySkills(!displaySkills);
 };


  return (
    <>
      {/* <div className="container"> */}
      <div className="left-side">
        <h1><b>PYTHON TRAINING INSTITUTE IN PUNE </b></h1>
        <h2>Course Overview</h2>
        <p>
          This comprehensive Python programming course is designed to cater to both beginners and experienced developers who want to learn and enhance their Python programming skills. Whether you are completely new to programming or already have some experience with other languages, this course will provide you with a solid foundation in Python and help you develop proficiency in the language.
        </p>
        <div className="enroll-now">
          <Link to='/enquiryform'>
            <button className="enroll-now-button">Enroll Now</button>
          </Link>
          </div>
      </div>
  
      <div className="key-highlights">
        <h2><b>Key Highlights</b></h2>
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
      <div className="python-card">
        <h2><b>Learn Python</b></h2>
        <p>Python is a high-level, object-oriented programming language.
          It is popularly used in a wide range of applications, from web development to machine learning.
          Learning Python course in Pune can be beneficial for you, whether you are a student, a professional, or a business owner.
          It adds value to your resume and can open new career opportunities.
        </p>
        <div className="rating">
          <p>5.0</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>332 reviews</p>
        </div>
        <div className="enroll-now">
        <Link to='/enquiryform'>
          <button className="enroll-now-buttons-4">Enquiry Now</button>
          </Link>
          <button>Call Us Now</button>
        </div>
        <div className="course-overview-container">
          <div className="course-overview">
            <h2>Python Course Overview</h2>
            <p>
              Python is powerful and the world’s fastest-growing programming language.
              It is widely used in various industries, including IT, finance, healthcare, and education.
              Its simplicity, usability, and versatility have helped it become very popular in recent years.
              Enrolling in a Python training course is an excellent place to start if you want to learn the language.
              <br /><br />
              At Vtech Infotech, we cover a wide range of topics in our Python basic to advance course in Pune, including
              the fundamentals of Python, data structures, algorithms, object-oriented programming, web development, and data science.
              Our trainers teach Python using a practical, hands-on method that includes several coding exercises, projects, and case studies.
              You will have a solid understanding of the language and be able to create Python programs on your own by the time our Python training course is over.
            </p>
          </div>
          <div className="skills-gain ">
            <h2>Skills you'll gain</h2>
            <li>Python programming fundamentals</li>
            <li>Data manipulation and analysis</li>
            <li>Web scraping and automation</li>
            <li>Object-oriented programming</li>
            <li>Working with APIs and JSON data</li>
            <li>GUI development</li>
            <li>Data visualization</li>
            <li>Database integration</li>
            <li>Error handling and exception handling</li>
            <li>Introduction to machine learning and data science</li>

          </div>
        </div>
        <div className='Card concard'>
          <h3>Course Objectives </h3><br></br>
          <div className="Python-card">
            <div>
              <h2>Advance Python Programming</h2>
              <h4>Course Duration : 100HOURS</h4>

              <div>

                <img src="../image/python.png" width="100" height="100" />
              </div><br></br>

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
              </button><br></br>
            </div>
            <div className="skills-box" data-skills-box>
              {displaySkills ? (
                <div className="skills-list">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><b>Object Oriented Programming</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Class & Objects</li>
                          <li>Attributes In Python</li>
                          <li>Inheritance</li>
                          <li>Overloading In Python</li>
                          <li>Overriding In Python</li>
                          <li>Data Hiding Concept</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="1">
                      <Accordion.Header><b>Regular Expression</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Match Function</li>
                          <li>Search Function</li>
                          <li>Matching VS Searching</li>
                          <li>Modifiers</li>
                          <li>Patterns</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="2">
                      <Accordion.Header><b>CGI</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>  Introduction Architecture CGI Environment Variable GET And POST Methods Cookies File Upload</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="3">
                      <Accordion.Header><b>Database</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Introduction</li>
                          <li>Connections</li>
                          <li>Executing Queries</li>
                          <li>Transactions</li>
                          <li>Handling Error</li>

                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="4">
                      <Accordion.Header><b>Networking</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Socket</li>
                          <li>Socket Module</li>
                          <li>Methods</li>
                          <li>Client And Server</li>
                          <li>Internet Modules</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="6">
                      <Accordion.Header><b>Multithreading</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Thread</li>
                          <li>Starting A Thread</li>
                          <li>Threading Module</li>
                          <li>Synchronizing Threads</li>
                          <li>Multithreaded Priority Queue</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="7">
                      <Accordion.Header><b>GUI Programming</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Introduction</li>
                          <li>Tkinter Programming</li>
                          <li>Tkinter Widgets</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item><Accordion.Item eventKey="8">
                      <Accordion.Header><b>Sending Email</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li> Sending Email</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              ) : (
                <div className="skills-list">
                  <Accordion>
                     <Accordion.Item eventKey="0">
                      <Accordion.Header><b>Introduction</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Python - What, Where And Why?</li>
                          <li>History And Features Of Python</li>
                          <li>Introduction Python Program Tools</li>
                          <li>Create Python Project</li>
                          <li>Python Programming Syntax</li>
                          <li>Variable And Data Type</li>
                          <li>Operators In Python</li>
                          <li>Single Line / Multiline Comments In Python</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header><b>Conditional Statement</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>

                          <li>If</li>
                          <li>If Else</li>
                          <li>Nested If Else</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header><b>Looping In Python</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>For Loop</li>
                          <li>While Loop</li>
                          <li>Nested Loops</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header><b>Control Statement</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Break</li>
                          <li>Continue</li>
                          <li>Pass</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header><b>String manipulation</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Accessing Strings</li>
                          <li>Basic Operations</li>
                          <li>String Slices</li>
                          <li>Functions and Methods</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header><b>List</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Introduction</li>
                          <li>Accessing List</li>
                          <li>Operations</li>
                          <li>Working With Lists</li>
                          <li>Functions and Methods</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header><b>Tuple In Python</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>

                          <li>Introduction</li>
                          <li>Accessing Tuples</li>
                          <li>Tuple Operations</li>
                          <li>Functions and Methods</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header><b>Dictionaries</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Introduction</li>
                          <li>Accessing Values In Dictionaries</li>
                          <li>Working With Dictionaries</li>
                          <li>Properties Functions</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header><b>Function</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Defining A Function</li>
                          <li>Calling A Function</li>
                          <li>Types Of Functions</li>
                          <li>Function Arguments</li>
                          <li>Anonymous Functions</li>
                          <li>Global And Local Variables</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header><b>Modules</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>
                          <li>Importing Module</li>
                          <li>Math Module</li>
                          <li>Packages</li>
                          <li>Composition</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                      <Accordion.Header><b>Input And Output</b></Accordion.Header>
                      <Accordion.Body style={{ textAlign: 'left' }}>
                        <ul style={{ paddingLeft: 0 }}>

                          <li>Printing On Screen</li>
                          <li>Reading Data From Keyboard</li>
                          <li>Opening And Closing File</li>
                          <li>Reading And Writing Files Functions</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item></Accordion>
                </div>


              )}
            </div>
          </div>
        </div>
        <div class="course-eligibility">
          <div class="eligibility">
            <h2>Who can apply for the course?</h2>
            <h5>The Python Programming course is open to a diverse range of individuals
               who are interested in learning Python programming. The course is designed to accommodate different 
              levels of experience, from beginners to more advanced learners.</h5>
            <br></br>
            <br></br>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>Beginner</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Individuals who have no prior programming experience and want to start their programming journey with Python.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>Student</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Students pursuing computer science or related fields who want to gain a solid foundation in Python programming.                                        </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><b>Experience Python Devloper</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Programmers who are already familiar with Python but want to deepen their knowledge and explore advanced topics and best practices.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><b>Professional Software Engineer</b></Accordion.Header>
                <Accordion.Body style={{ textAlign: 'left' }}>
                  <ul style={{ paddingLeft: 0 }}>
                    <li>Individuals who have no prior programming experience and want to start their programming journey with Python.
                      Professionals working in the software development industry who want to add Python to their skillset or update their Python knowledge.                </li>
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
        

        
      </div>

      {/* </div> */}
    </>
  );
}
