
import React from 'react';
import { Container, Row, Col, Card, Carousel,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import SocialMediaIcons from './SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';



const AboutUs = () => {
  return (


    <div className="about-us">
      <div>
        <img src="../image/bgAbout.png" width="1500" height="250" alt="About Logo" /> {/* Using an external URL */}
      </div>

      <div className="text-overlay">
        <h1><b>ABOUTUS</b></h1>
      </div>



      <h1 className="text-center my-5">Welcome to Vtech Infotech</h1>
      <p className="paragraph text-wrap">
        Vtech Infotech is the best IT training institute in Pune. We provide cutting-edge training programs for individuals and organizations looking to expand their
        knowledge and abilities in the area of IT and software development.
        In order to satisfy the constantly changing needs of the industry, our institute offers a wide
        choice of courses that are taught by professionals with in-depth knowledge of their respective industries.
        Our institute is dedicated to giving our students the greatest learning experience possible.
        We provide flexible schedules, personalized attention, and a success-oriented learning environment.
        Whether you want to start a new career in IT and software development or want to improve your current skills,
        Vtech Infotech is the best IT training institute in Pune that has the resources and expertise to help you achieve your goals.
        Our courses are designed to be highly engaging and interactive with a focus on practical learning and real-world application.
        Through our unique programs, we empower our students with the skills and knowledge they need to thrive in the competitive world of IT and software development.
        Our team of competent educators, who are not just highly talented and qualified but also passionate about teaching and assisting our students in succeeding,
        is something Vtech Infotech takes great pride in.

        Vtech Infotech has an exceptional track record when it comes to student placements as our excellent placement cell has developed long-lasting partnerships with top firms over the years. With our vast network of industry partners,
        we have been successful in placing nearly 100% of our students, who routinely participate in field drives or joint drives. </p>
    
   <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow mission-card">
            <Card.Body>
              <Card.Title className="text-center text-wrap">Mission</Card.Title>
              <Card.Text>
                Our mission is to successfully place our enrolled students in the IT industry.
                We aim to place 100% of our students in the software industry by providing valuable knowledge to
                candidates for achieving their noble destiny.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow vision-card">
            <Card.Body>
              <Card.Title className="text-center text-wrap">Vision</Card.Title>
              <Card.Text>
                Our vision is to smile the world through education.
                We aim to build confidence and pride in the Indian young generation.
                We believe that no one is a last bencher in college;
                everyone in life is a topper, just needing guidance and support from the world's best teachers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
         <Container className="d-flex justify-content-center mt-4">
      <Card className="shadow why-enroll-card text-wrap" style={{ maxWidth: '1400px'}}>
        <Card.Body>
          <Card.Title className="text-center">Why Should You Enroll at Vtech Infotech?</Card.Title>
          <Card.Text className="paragraph ">
            At Vtech Infotech, we understand that enrolling in IT certification courses
            is an investment in your future. Therefore, we offer top-notch training programs that increase your potential, capacity, and performance and also provide you with the skills necessary to succeed in the IT industry.
            <br /><br />
            If you enroll in Vtech Infotech’s training programs, you can jumpstart your
            IT career by learning from experienced
            and certified professionals at the best IT Training Institute in Pune.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
      <div className='images1'>
        <div>
          <h2>Programming Languages & Tools Covered in  Full Stack Developer Course</h2>

          <Card.Img
            variant="top"
            src="./image1/java.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/Angular.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/aws.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/Bootstrap.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/css.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/Eclipse.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/html.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          /><Card.Img
            variant="top"
            src="./image1/js.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/junit.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/Mysql.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/python.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/React.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
          <Card.Img
            variant="top"
            src="./image1/spring.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
           <Card.Img
            variant="top"
            src="./image1/jupyter.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
           <Card.Img
            variant="top"
            src="./image1/scrum.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
           <Card.Img
            variant="top"
            src="./image1/dijango.png"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
        </div>
      </div>
      <Container className='mt-5'>
      <Row className="align-items-center my-4">
        <Col md={4} className="text-center">
          <Image src="./image/serviceimg.png" alt="Team" fluid />
        </Col>
        <Col md={8}>
          <h2>Highlights of our Team Services</h2>
          <div className="highlight-text">
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Vtech is the only company that focuses on imparting right knowledge, hands-on and best training.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Our team focuses on making sure that each student gets personal attention, hence we keep the batch size smaller. Not like other institutes who just fill in batches with a large number of students.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> We ensure that you get LIVE project experience with us and we provide you with an experience certificate as applicable to your course.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Vtech team’s best guiding process gives you a Unique learning experience to make sure that your knowledge of basic concepts becomes very strong so that you can face any technical challenges in life.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> We have a team of Trainers with a minimum of 10 years of coaching expertise to give you the Best learning experience.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> We are the Best IT Training and Placement institute in Pune because all our students are fully satisfied with the customized way of DGX trainers training and coaching them with an aim of helping them with a desired professional career.</p>
          </div>
        </Col>
      </Row>
    </Container>
      <h2 className="text-center my-5">Student Reviews</h2>
      <Row className="my-5">
        <Col>
          <Carousel className="review-carousel">
            <Carousel.Item>
              <Row>
                <Col md={3}>
                  <Card className="mb-4 shadow review-card">
                    <Card.Body>
                      <Card.Title>Lata Kutre</Card.Title>
                      <Card.Text>
                        Hii I'm Lata. I have completed Msc cs in 2024. I have completed a internship in frontend Technology at Vtech Infotech. Vtech class helped me a lot, because of that class I am in this position. Thank you so much Vtech staff...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="mb-4 shadow review-card">
                    <Card.Body>
                      <Card.Title>Rutuja Tambade</Card.Title>
                      <Card.Text text-wrap>
                        7th january, me and my friends first day in Vtech. The lecture was to start at 1 pm. We seat in the class and after a while vitthal sir entered. And sir took everyone's introduction...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="mb-4 shadow review-card">
                    <Card.Body>
                      <Card.Title> chaitanya Khandagale</Card.Title>
                      <Card.Text text-wrap>
                        Hello Everyone!!! A truly great mentor is hard to find, difficult to part with, and impossible to forget. The above quote resonates very true with me. I joined Vtech with hope of breaking into IT field...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="mb-4 shadow review-card">
                    <Card.Body>
                      <Card.Title>Vinayak Deshmukh</Card.Title>
                      <Card.Text text-wrap>
                        Vtech is the best place for learning coding and for placement purposes. The faculty members are highly knowledgeable and passionate about teaching, and they provide in-depth training...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            {/* Add more reviews as Carousel.Item if needed */}
          </Carousel>
        </Col>
      </Row>
      <SocialMediaIcons />
    </div>
  );
};

export default AboutUs;
