
import React, { Component } from 'react'
// import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import CarouselComponent from './testing/CarouselComponent'
import Course_Information from './Course_Information'
import Upcoming_Batches from './Upcoming_Batches'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { GrCheckboxSelected } from "react-icons/gr";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import '../components/home.css';
import SocialMediaIcons from './SocialMediaIcons';
export class Home extends Component {
  // static propTypes = {}

  render() {
    return (
      <div>
        {/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        */}
        <CarouselComponent></CarouselComponent>
          <Course_Information></Course_Information>
          <Upcoming_Batches></Upcoming_Batches>

       



    {/* start */}

<Container >
      <Row>
      
           <p className='F2 '>
           <h1 className='F1'>Why Choose US?</h1>
            Different Services we provide
            {/* <h4>Features</h4> */}
            </p> 

        <Col xs={12} md={6}>
        <img className='img1 img-fluid' src="../image/whychooseus.jpg"  alt="Different Services we provide"  max-width=' 80%' height='auto'/>
        </Col>
        <Col xs={12} md={6}> 
        <div className='Cd1'>
          <Row>
            
            <Col>
            <Card className=' mt-2 mb-4  shadow border-light'>
          <Card.Body > <GrCheckboxSelected className='CA1' size={20} style={{float: 'left' }}/><span className='CA_1'> Training by Industry Experts, Project Based Training.</span></Card.Body>
            </Card>
          </Col>
            <Col> 
             <Card className='mt-2 mb-6 shadow border-light'>
      <Card.Body><GrCheckboxSelected  className='CA2' size={20} style={{float: 'left' }}/> Complementary Resume building sessions.</Card.Body>
    </Card>
    </Col>
          </Row>
          <Row>
          <Col> 
           <Card className='xs={12} md={6} mt-2 mb-6  shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA3' size={20} style={{float: 'left' }}/> LinkedIn and Naukri profile review by HR.</Card.Body>
    </Card>
    </Col>
            <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA4' size={20} style={{float: 'left' }}/> Learning ,Training And Working.</Card.Body>
    </Card>
    </Col>
          </Row>
          <Row>
          <Col> 
           <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA5' size={20} style={{float: 'left' }}/> Mock interview </Card.Body>
    </Card>
    </Col>
            <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA6' size={20} style={{float: 'left' }}/> Live Project Working</Card.Body>
    </Card>
    </Col>
    
    
          </Row>

          <Row>
          <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA6' size={20} style={{float: 'left' }}/> Course Completion Certificate</Card.Body>
    </Card>
    </Col>
    <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA6' size={20} style={{float: 'left' }}/>  Weekly Assignment</Card.Body>
    </Card>
    </Col>
          </Row>

          <Row>
          <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      <Card.Body><GrCheckboxSelected className='CA6' size={20} style={{float: 'left' }}/> 100% Placement Assistance</Card.Body>
    </Card>
    </Col>
    <Col> 
             <Card className='xs={12} md={6} mt-2 mb-4 shadow border-light'>
      {/* <Card.Body>
        <GrCheckboxSelected className='CA6' size={20} style={{float: 'left' }}/> 
        </Card.Body> */}
    </Card>
    </Col>
          </Row>
          </div>
        </Col>
        
      </Row>
    </Container>



    
    
    <Container >
      <Row>
      <Col xs={12} md={12}>
      <p className='F2 '>
           <h1 className='F1'>WHO WE ARE</h1>
          <h2><span className='firstletter'>V</span><span className='logocolor2'>Tech Academy</span> <span className='logocolor2'>Is All About Excellence</span></h2> 
          <h3 className='text-dark'>Best IT training institute in Pune</h3>
          
            </p> 
            <p>
            We provide you all the programing language training and Job Oriented Placment Programs. 
            <span className='firstletter2 logocolor1'>V</span><span className='logocolor2'>Tech Academy</span>  is the best IT training institute in Pune. 
            We provide cutting-edge training programs for individuals and organizations looking to expand their knowledge and abilities in the area of IT and software development.
             In order to satisfy the constantly changing needs of the industry, our institute offers a wide choice of courses that are taught by professionals with in-depth knowledge of their respective industries. 
             We have best experienced team & visiting industry expert trainers. 
             We serve online and classroom IT training in Pune.
            </p>
        </Col>
          
            </Row>
            </Container>


            <Container className='mb-5'>
            <Row>
            <Col xs={12} md={6}>
        <img className='img1 img-fluid' src="../image/studentquations.svg"  alt="Service"  max-width=' 80%' height='auto'/>
        </Col>
        <Col xs={12} md={6}> 

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='logocolor1'>Does VTech Academy IT Training Institute provide placement assistance?</Accordion.Header>
        <Accordion.Body>
        
Yes, VTech Academy IT Training Institute provides placement assistance to its students. 
{/* They have tie-ups with several companies in the IT industry and help their students in getting placed in these companies. */}
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can join the courses at VTech Academy IT Training Institute?
        </Accordion.Header>
        <Accordion.Body>
        Anyone who is interested in learning IT skills can join the courses at VTech Academy IT Training Institute. 
        There are no specific eligibility criteria for most of the courses.
          
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header> Does VTech Academy IT Training Institute offer any certifications?</Accordion.Header>
        <Accordion.Body>
       
Yes, VTech Academy IT Training Institute offers certification programs for some of their courses. 
These certifications are recognized in the industry and can help you in your job search.
          
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the mode of training at  VTech Academy IT Training Institute?</Accordion.Header>
        <Accordion.Body>
       
        
        VTech Academy IT Training Institute offers both online and classroom training modes. 
        You can choose the mode of training that suits you the best.
          
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="4">
        <Accordion.Header> What is the duration of the courses offered at VTech Academy IT Training Institute?</Accordion.Header>
        <Accordion.Body>
       
        
       
        The duration of the courses varies depending on the course you choose. 
        Typically, the duration ranges from 4 months to 6 months.
          
        </Accordion.Body>
      </Accordion.Item>


      
      <Accordion.Item eventKey="5">
        <Accordion.Header> What is the fee structure of the courses at VTech Academy IT Training Institute?</Accordion.Header>
        <Accordion.Body>
       
        
        
        <p>The fee structure of the courses at VTech Academy IT Training Institute varies depending on the course you choose.
         You can contact them directly for more information on the fee structure.
         </p> 
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="6">
        <Accordion.Header className='bold'>  What courses does  VTech Academy IT Training Institute offer?</Accordion.Header>
        <Accordion.Body>
       
       
        VTech Academy IT Training Institute offers a wide range of courses in various IT domains, including:
        <ListGroup>
     
      <ListGroup.Item variant="primary">Java/J2EE</ListGroup.Item>
      <ListGroup.Item variant="secondary">Python</ListGroup.Item>
      <ListGroup.Item variant="success">AngularJS</ListGroup.Item>
      <ListGroup.Item variant="danger">ReactJS</ListGroup.Item>
      <ListGroup.Item variant="warning">Web Development</ListGroup.Item>
      <ListGroup.Item variant="info">Database Management</ListGroup.Item>
      <ListGroup.Item variant="light">Mobile Application Development
      </ListGroup.Item>
      <ListGroup.Item variant="dark">Data Science and Machine Learning</ListGroup.Item>

      <ListGroup.Item variant="primary">Etc.</ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
</Row>
           
            </Container>
{/* end */}
<SocialMediaIcons/>
</div>

    )
  }
}

export default Home