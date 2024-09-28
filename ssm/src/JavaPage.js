import React, { useState } from 'react';
import './JavaPage.css';
import { FaCertificate, FaUserGraduate, FaBriefcase, FaProjectDiagram, FaChalkboardTeacher, FaHandshake, FaTasks, FaClock, FaStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function JavaPage() {
    const [displaySkills, setDisplaySkills] = useState(true);

    const toggleDisplay = () => {
        setDisplaySkills(!displaySkills);
    };
   

    return (
        <>
         {/* <div className="container">
            <div className="content"> */}<br></br>
        
            <h1><b>JAVA TRAINING INSTITUTE IN PUNE</b></h1>
            <div className="course-info">
                <h2>Course Overview</h2>
                <p>
                    The Comprehensive Java Programming course is designed to cater to both beginners and experienced developers looking to enhance their Java programming skills. The course covers the fundamental concepts of Java programming and gradually progresses to more advanced topics, ensuring a solid understanding of the language for all participants. Whether you are a beginner with no prior coding experience or an experienced developer seeking to expand your knowledge, this course will provide you with the necessary skills to develop robust Java applications.
                </p>
                <br></br>
                <div className="enroll-now">
          <Link to='/enquiryform'>
            <button className="enroll-now-button">Enroll Now</button>
          </Link>
          </div>
<br></br>
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
            <div className="java-card">
                <h2><b>Learn Java</b></h2>
                <p>Java is a high-level, object-oriented programming language used to create standalone and web-based programs. It is platform-independent and architecturally neutral, making it one of the most widely used programming languages in the industry.</p>
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
                    <a href="tel'+919890089721">
                    <button>Call Us Now</button>
                    </a>
                </div>
            </div>
          
             <div className="course-overview-container">
                    <div className="course-overview">
                        <h2><b>Java Course Overview</b></h2>
                        <p>
                        At our Java Training Classes in Pune, we focus on providing comprehensive training to improve one’s capability, capacity, and performance in Java programming. Our courses cover a range of topics, including ByteCode, JVM architecture, classpath, objects, and Java syntax synchronization techniques. Our Java technical course is suitable for beginners and professionals alike, and it provides hands-on experience with Classes and objects, Object-Oriented Programming (OOP), and Modifiers. Acquiring knowledge of Java can lead to a career as a Java developer, with numerous frameworks available such as Hibernate, Spring, Web services, and more.
                    </p>
                    <p>
                        In terms of opportunities and advancement, Java is the best programming language. It is widely used in various technologies like Hadoop, SalesForce, Cloud Computing, and Android. At Vtech Institute, we have the expertise and knowledge to help our students master these skill sets and advance in all Java-related environments.
                    </p>
                    </div>
                    <div className="skills-gain">
                        <h2>Skills you'll gain</h2>
                        <ul>
                        <li>Java programming fundamentals</li>
                        <li>Application development</li>
                        <li>Java libraries and APIs</li>
                        <li>Database integration</li>
                        <li>Web development</li>
                        <li>Java frameworks</li>
                        <li>Testing and debugging</li>
                        <li>Object-oriented design principles</li>
                        <li>Error handling and exception handling</li>
                        <li>Performance optimization</li>
                         </ul>
                    </div>
                </div>
                <Container className="d-flex justify-content-center align-items-center ">
            <div className='card' style={{width:"100rem"}}>
                <h3><b>Course Objectives </b></h3><br></br>
                <Container className="d-flex justify-content-center align-items-center  bg-rgb(2,0,36)">

                <div className="java-card" style={{ width: "70rem" }}>
                    <div> 
                        <h2>BASIC OF JAVA</h2>
                        <h4>Course Duration : 4-5 Months</h4>
                        <h5>Core java syllabus - object oriented programming (oops concept) in java
                        </h5><br></br>
                        <div>

                            <img src="../image/java.png" width="120" height="90" />
                        </div><br></br>

                    </div>
                    <div className="skills-toggle" data-toggle-box>
                        
                        <button
                            className={`toggle-btn ${!displaySkills ? 'active' : ''}`}
                            data-toggle-btn
                            onClick={toggleDisplay}
                        >
                            Core Java
                        </button>
                        <button
                            className={`toggle-btn ${displaySkills ? 'active' : ''}`}
                            data-toggle-btn
                            onClick={toggleDisplay}
                        >
                            Advance Java
                        </button>
                        <br></br>
                    </div>
                    <div className="skills-box" data-skills-box>
                        {displaySkills ? (
                            <div className="skills-list">
                                <Accordion>
                                    
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><b>JDBC</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>JDBC Drivers Types In Java</li>
                                                <li>Steps To Connect To The All Types Of Database</li>
                                                <li>Connectivity With Access Without And With DSN</li>
                                                <li>DriverManager Class In JDBC</li>
                                                <li>Connection Interface In JDBC</li>
                                                <li>Statement Interface In JDBC</li>
                                                <li>ResultSet Interface In JDBC</li>
                                                <li>PreparedStatement In JDBC</li>
                                                <li>ResultSetMetaData In JDBC</li>
                                                <li>DatabaseMetaData In JDBC</li>
                                                <li>Storing Image In JDBC</li>
                                                <li>Retrieving Image In JDBC</li>
                                                <li>Storing File And Retrieving File Using JDBC</li>
                                                <li>Stored Procedures And Functions In PL/SQL Using Java</li>
                                                <li>Transaction Management (TCL Commands)</li>
                                                <li>Batch Processing Or Group Command Processing</li>
                                                <li>JDBC New Features In Java</li>
                                                <li>CRUD Mini Project</li>
                                            </ul>
                                            This format presents each topic clearly in a numbered list, making it easy to reference and understand the content related to JDBC (Java Database Connectivity).
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="2">
                                        <Accordion.Header><b>Introduction of WebDesign</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                HTML/CSS/JAVASCRIPT Introduction(Hw)
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="3">
                                        <Accordion.Header><b>Basic of Servlet</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Servlet In Java</li>
                                                <li>Basics Of Web Pages</li>
                                                <li>Servlet API Introduction</li>
                                                <li>Servlet Interface In Servlet</li>
                                                <li>GenericServlet In Servlet</li>
                                                <li>HttpServlet In Servlet</li>
                                                <li>Servlet Life Cycle In Java</li>
                                                <li>Apache Tomcat Server</li>
                                                <li>Steps To Create A Servlet In Tomcat And Connectivity</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="4">
                                        <Accordion.Header><b>Servlet Request</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>ServletRequest Methods In Servlet</li>
                                                <li>Registration Example With DB</li>
                                                <li>Servlet Collaboration</li>
                                                <li>RequestDispatcher Interface</li>
                                                <li>SendRedirect Method</li>
                                                <li>ServletConfig</li>
                                                <li>ServletConfig Methods</li>
                                                <li>ServletConfig Example</li>
                                                <li>ServletContext</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="5">
                                        <Accordion.Header><b>Servlet Collaboration</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>RequestDispatcher Interface</li>
                                                <li>SendRedirect Method</li>
                                                <li>ServletConfig</li>
                                                <li>ServletConfig Methods</li>
                                                <li>ServletConfig Example</li>
                                                <li>ServletContext</li>
                                                <li>ServletContext Methods In Application Scope</li>
                                                <li>ServletContext Example</li>
                                                <li>Attribute: How To Set, Get And Remove Example With Get Set Methods</li>
                                                <li>Session Tracking</li>
                                                <li>Cookies Class And Their Methods</li>
                                                <li>Hidden Form Field Techniques</li>
                                                <li>URL Rewriting In Servlet</li>
                                                <li>HttpSession In Servlet</li>
                                                <li>Event And Listener</li>
                                                <li>Event And Listener Examples</li>
                                                <li>Filter</li>
                                                <li>Filter In Java</li>
                                                <li>Authentication Filter With Example</li>
                                                <li>FilterConfig With Example</li>
                                                <li>ServletInputStream And ServletOutputStream Class Example</li>
                                                <li>Project Development In Servlet</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="6">
                                        <Accordion.Header><b>JSP</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                Basics Of JSP
                                                <li>Life Cycle Of JSP Pages</li>
                                                <li>JSP API In Java</li>
                                                <li>JSP In Netbean</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="7">
                                        <Accordion.Header><b>Scripting Element</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Scriptlet Tag In JSP</li>
                                                <li>Expression Tag In JSP</li>
                                                <li>Declaration Tag In JSP</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="8">
                                        <Accordion.Header><b>Directives</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li> Page Directive With Their Attribute</li>
                                                <li>Include Directive</li>
                                                <li>Taglib Directive With Their Attributes</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="9">
                                        <Accordion.Header><b>Mvc Jsp</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                Small MVC Project Using Jsp
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="10">
                                        <Accordion.Header><b>Jstl</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Custom Tags</li>
                                                <li>Custom Tag or How to Create User Defined Tags</li>
                                                <li>Custom Tag API in JSP</li>
                                                <li>Custom Tag Examples</li>
                                                <li>Attributes in Custom Tags</li>
                                                <li>Iteration or Loops and If-Else Statement Tag</li>
                                                <li>Custom URI in JSP Tag</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="11">
                                        <Accordion.Header><b>Introduction Hibernate</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                Examples Of Hibernate In Projects.
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item><Accordion.Item eventKey="12">
                                        <Accordion.Header><b>Spring</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                Examples Of Spring In Projects.
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header><b>SpringBoot</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                Examples Of SpringBoot In Projects.
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
                                                <li> Java - What, Where And Why?</li>
                                                <li> History And Features Of Java 7 And Java 8</li>
                                                <li> Internals Of Java Program</li>
                                                <li> Difference Between JDK, JRE And JVM In Java</li>
                                                <li> Internal Modules Of JVM</li>
                                                <li> Variable And Data Type (User Defined And System Defined)</li>
                                                <li> Unicode System In Java</li>
                                                <li> Convention In Java</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><b>Core Java Concepts</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>

                                                <li>Advantage Of OOPs (C++ REVISION)</li>
                                                <li>Object And Class Difference</li>
                                                <li>Method Overloading And Overriding</li>
                                                <li>Constructor With Their Types</li>
                                                <li>Static Variable, Method And Types Of Java Blocks</li>
                                                <li>This Keyword In Java</li>
                                                <li>Inheritance Aggregation (IS-A) And Composition (HAS-A) In Java</li>
                                                <li>Covariant Return Type In Inheritance</li>
                                                <li>Super Keyword And Final Keyword</li>
                                                <li>Instance Initializer Block In Java</li>
                                                <li>Runtime Polymorphism In Java</li>
                                                <li>Static And Dynamic Binding In Java</li>
                                                <li>Abstract Class And Interface Difference</li>
                                                <li>Downcasting With Instanceof Operator In Java</li>
                                                <li>Package And Access Modifiers In Java</li>
                                                <li>Encapsulation Vs Abstraction</li>
                                                <li>Object Class</li>
                                                <li>Object Cloning With Cloneable Interface</li>
                                                <li>Java Array Object And Properties</li>
                                                <li>Call By Value And Call By Reference In Java</li>
                                                <li>Strictfp Keyword In Java</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><b>String Handling</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>String Importance In Java</li>
                                                <li>Immutable String In Java</li>
                                                <li>String Comparison With Their Types</li>
                                                <li>String Concatenation With Methods And Operators</li>
                                                <li>Substring In Java</li>
                                                <li>Methods Of String Class</li>
                                                <li>StringBuffer Class And StringBuilder Class In Java</li>
                                                <li>Creating Immutable Class In Java</li>
                                                <li>ToString Method With Object</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><b>Exception Handling</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Exception Handling In Java</li>
                                                <li>Try And Catch Block In Java</li>
                                                <li>Multiple Catch Block In Java</li>
                                                <li>Nested Try In Java Class</li>
                                                <li>Finally Block With Try And Catch Block</li>
                                                <li>Throw Keyword In Java</li>
                                                <li>Exception Propagation With Checked And Unchecked Exceptions</li>
                                                <li>Throws Keyword With Custom Exceptions</li>
                                                <li>Exception Handling With Method Overriding In Java</li>
                                                <li>Custom Exception Or User Defined Exceptions</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><b>Multithreading</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Multithreading In Java</li>
                                                <li>Life Cycle Of A Thread Class</li>
                                                <li>Creating Thread Using Different Types</li>
                                                <li>Thread Scheduler Behaviour</li>
                                                <li>Sleeping A Thread With Sleep Method In Java</li>
                                                <li>Joining A Thread With Join Method</li>
                                                <li>Thread Priority Techniques</li>
                                                <li>Daemon Thread In Java</li>
                                                <li>Thread Pooling In Java</li>
                                                <li>Thread Group In Java</li>
                                                <li>ShutdownHook Method In Java</li>
                                                <li>Multiple Task By Multiple Thread</li>
                                                <li>Garbage Collection With GC</li>
                                                <li>Runnable Class And Their Methods</li>
                                                <li>Synchronization In Java Thread</li>
                                                <li>Synchronized Method, Block</li>
                                                <li>Static Synchronization In Java</li>
                                                <li>Deadlock Situation In Thread</li>
                                                <li>Inter-Thread Communication With Wait, Notify And Notify All Methods</li>
                                                <li>Interrupting Thread With Interrupt Method</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header><b>Nested Classes</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <ol>
                                                    <li>Nested Class In Java</li>
                                                    <li>Member Inner Class In Java</li>
                                                    <li>Anonymous Or Unnamed Inner Class</li>
                                                    <li>Local Inner Class In Method Of Java Class</li>
                                                    <li>Static Nested Class In Java</li>
                                                    <li>Nested Interface Java</li>
                                                </ol></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header><b>Input And Output</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                
                                                    <li>FileOutputStream & FileInputStream API In Java I/O</li>
                                                    <li>ByteArrayOutputStream, SequenceInputStream, BufferedOutputStream, BufferedInputStream</li>
                                                    <li>FileWriter & FileReader In Java I/O</li>
                                                    <li>CharArrayWriter With Their Methods</li>
                                                    <li>Input From Keyboard By InputStreamReader, Console, Scanner</li>
                                                    <li>PrintStream, PrintWriter Class</li>
                                                    <li>Compressing And Uncompressing File (Zip-Unzip Files)</li>
                                                    <li>Reading And Writing Data Simultaneously Using Thread</li>
                                                    <li>DataInputStream And DataOutputStream Class</li>
                                                    <li>Serialization & Deserialization With File</li>
                                                    <li>Serialization With IS-A And Has-A Inheritance Relation</li>
                                                    <li>Transient Keyword With Serialized Object</li>
                                                </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header><b>Networking</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Socket Programming Server And Client API</li>
                                                <li>URL Class In Java</li>
                                                <li>Displaying Data Of A Web Page Using Methods</li>
                                                <li>InetAddress Class And Their Methods</li>
                                                <li>DatagramSocket And DatagramPacket In Java</li>
                                                <li>Two Way Communication (Server-Client)</li></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header><b>Reflaction Api</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Reflection API In Java</li>
                                                <li>Class Class And Object Class In Java Reflection</li>
                                                <li>NewInstance(), ForName(), .Class Methods For Determining The Class Object</li>
                                                <li>System Defined Javap Tool</li>
                                                <li>Creating Custom Javap Tool</li>
                                                <li>Accessing Private Method From Outside The Class Using Method Class</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header><b>Java 8 Features</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <li>Assertion, For-Each Loop, Varargs, Static Import In Java</li>
                                                <li>Lambda Expression And Functional Interface</li>
                                                <li>Autoboxing And Unboxing With Wrapper Class</li>
                                                <li>Annotation In Java</li></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header><b>RegularExpression In Java 8</b></Accordion.Header>
                                        <Accordion.Body style={{ textAlign: 'left' }}>
                                            <ul style={{ paddingLeft: 0 }}>
                                                <ol>
                                                    <li>Regular Expression API</li>
                                                    <li>Pattern And Matcher Class In Java</li>
                                                    <li>Regular Expression Operators</li>
                                                </ol></ul>
                                        </Accordion.Body>
                                    </Accordion.Item></Accordion>
                            </div>


                        )}
                    </div>
                </div>
                </Container>
            </div>
            </Container>
            <div class="course-eligibility">
                <div class="eligibility">
                    <h2>Who can apply for the course?</h2>
                    <br></br>
                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Beginner</b></Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '50px' }}>
                                    <li>Individuals who have no prior programming experience and want to start their programming journey with Java.
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Student</b></Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Students pursuing computer science or related fields who want to gain a solid foundation in Java programming.                                        </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Experience Java Devloper</b></Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft:'20px'}}>
                                    <li>Programmers who are already familiar with Java but want to deepen their knowledge and explore advanced topics and best practices.
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><b>Professional Software Engineer</b></Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Individuals who have no prior programming experience and want to start their programming journey with Java.
                                        Professionals working in the software development industry who want to add Java to their skillset or update their Java knowledge.                </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><b>Enthusiasts And Self-Learner</b></Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px'}}>
                                    <li>Individuals interested in programming and specifically Java, regardless of their professional background.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                    </Accordion>
                </div>
                <div class="images">
                    <img src="../image/girl1.png" alt="Professionals Image" />
                </div>
            </div>
            <div>
                <h2>100% PLACEMENT ASSISTANCE</h2>
              </div>

              <div class="course-Question">
              <div class="Question">
              <div class="image">
                    <img src="../image/student quations.png" alt="Professionals Image ,size={100}" /><br></br>
               <br></br>
               
                </div>
              </div>
              </div>
              <div class="accordion">
        <div class="accordion-item"style={{ textAlign: 'left',paddingBottom:'30px', paddingLeft:'50px' }}>
            
            <div class="accordion-header"> 1.Does Vtech Infotech offer placement assistance after course completion?</div>
            <div class="accordion-content">
                Yes, Vtech Infotech offers placement assistance to help students secure jobs after course completion.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left' ,paddingBottom:'50px', paddingLeft:'50px' }}>
        <div class="accordion-header">2.Who are the trainers for the Java basic to advance course?</div>
            <div class="accordion-content">
                The trainers are experienced and certified Java professionals with extensive industry knowledge.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left',paddingBottom:'50px' , paddingLeft:'50px' }}>
             <div class="accordion-header">3.Will I be given a certificate once the course is over?</div>
            <div class="accordion-content">
                Yes, you will receive a certificate upon successful completion of the course.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left' ,paddingBottom:'50px', paddingLeft:'50px'  }}>
         
            <div class="accordion-header">4.What job opportunities are available for Java developers?</div>
            <div class="accordion-content">
                Java developers can work in various roles such as software developer, web developer, and application developer in numerous industries.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left' ,paddingBottom:'50px', paddingLeft:'50px' }}>
         
            <div class="accordion-header">5.How much can I expect to earn as a Java developer?</div>
            <div class="accordion-content">
                The salary of a Java developer varies based on experience, location, and company, but it is generally competitive in the IT industry.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left',paddingBottom:'50px' , paddingLeft:'50px' }}>
         
            <div class="accordion-header"> 6.Where can I learn Core Java and Advance Java?</div>
            <div class="accordion-content">
                You can learn both Core Java and Advanced Java at Vtech Infotech in Pune, where we offer comprehensive training programs.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left',paddingBottom:'50px' , paddingLeft:'50px' }}>
         
            <div class="accordion-header">7.How do I enroll in a course at Vtech Infotech?</div>
            <div class="accordion-content">
                You can enroll by visiting our website or contacting us directly at our Pune office.
            </div>
        </div>
        <div class="accordion-item"style={{ textAlign: 'left',paddingBottom:'50px' , paddingLeft:'50px' }}>
         
            <div class="accordion-header">8.Why should I learn Java from Vtech Infotech?</div>
            <div class="accordion-content">
KDN Infotech is the best Java training institute in Pune. We offer the best IT training programs in both Core Java and Advanced Java. Our experienced and certified Java professionals, 
use a mix of theoretical lectures and hands-on exercises to ensure that our students gain the skills and knowledge they need to succeed as Java developers in today's competitive job market       </div>
        </div>
    </div>
    {/* <script src="scripts.js"></script> */}
              {/* </div>
              </div> */}
            </div>
            </>
     );
}
