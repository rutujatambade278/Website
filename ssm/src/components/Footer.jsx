import '../components/Footer.css'
import { Link } from "react-router-dom";
import React from 'react';
import  { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
export default function Footerex() {
    const [clicked, setClicked] = useState(false);

  // Function to handle click on the footer link
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setClicked(true); // Set clicked to true to trigger re-rendering
  };
  return (
    <div className=''>
         <div className="  my-5 ">
  

  {/* Footer */}
  <footer
          className="text-center text-lg-start text-white p-1  "
         
          >
    
  
    {/* Section: Links  */}
  
    <section className="footerbg  p-2 bg-primary footerc2"  > 
      <div className=" text-center text-md-start mt-3">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold ftextcolor">VTECH ACADEMY</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{'width': '60px', 'background-color': '#f6f4fa', 'height': '2px'}}
                />
            <p>
             
            <div>
                                          <h5 className='ftextcolor'><FaHome size={25}/><span className="icon-ind me-2"></span> <small><i>( Office)</i></small></h5>
                                          <p><a className="ftextcolor"  href="#"><FaLocationDot />Office No.5,Sawant Park,Balaji Nagar,Pune Satara Road,Pune, Maharashtra, 411043, IN</a></p>
                                      </div>
                                      
  
                                      <div>
                                 
                                          
                                      </div>
            </p>
          </div>
          {/* Grid column */}
  {/* Grid column */}
  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold ftextcolor">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto bg-light"
                style={{'width':'60px' ,'height': '2px'}}
                />
           
           
            <div >
                                          <h5 className="ftextcolor"> <MdEmail  size={25} />Email</h5>
                                        
                                          <p className="mb-0"><a className="ftextcolor" href="mailto:contact@vtechacademy.in">contact@vtechacademy.in</a></p>
                                          <p className="mb-0"><a className="ftextcolor" href="mailto:support@vtechacademy.in">support@vtechacademy.in</a></p>
                                          <p className="mb-0"><a className="ftextcolor" href="mailto:support@vtechacademy.in">hr@vtechacademy.in</a></p>
                                      </div>
          
            
          
           
            <div className='mt-3'>
                                          <h5 className="ftextcolor"> <IoCall size={20} /><span>Call</span></h5>
                                          <p className="mb-0"><a className="ftextcolor " href="tel:+917276758721">+91 7276758721</a></p>
                                          {/* <p className="mb-0"><a className="text-light" href="tel:+917276758721">+91 9890089721</a></p>   */}
                                      </div>
          </div>
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold ftextcolor">Our Courses</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto ftextcolor"
                style={{'width': '60px',' background-color': '#f5f5f8', 'height': '2px'}}
                />
            <p>
            <FaAngleRight className='ftextcolor'/>  <Link  href="#" onClick={handleScrollToTop} as={Link} to="/mobile" className="ftextcolor"> Full Stack Java</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>   <Link  href="#" onClick={handleScrollToTop} as={Link} to="/web" className="ftextcolor"> Full Stack Python</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>   <Link  href="#" onClick={handleScrollToTop} as={Link} to="/ecommerce" className="ftextcolor"> Full Stack Mern</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>   <Link  href="#" onClick={handleScrollToTop} to="/digital" as={Link} className="ftextcolor"> Testing</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>   <Link  href="#" onClick={handleScrollToTop} to="/customsoftware" as={Link} className="ftextcolor">Mobile Application <span className='ms-4'>Development</span></Link>
            </p>
          </div>
          {/* Grid column */}
  
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold ftextcolor">Support</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{'width': '60px', 'background-color': '#f3eff3', 'height': '2px'}}
                />
            <p>
            <FaAngleRight className='ftextcolor'/>    <Link href="#" onClick={handleScrollToTop} as={Link} to="/disclaimer"  className="ftextcolor">Disclaimer</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>     <Link href="#" onClick={handleScrollToTop} as={Link} to="/privacy" className="ftextcolor">Privacy Policy</Link>
            </p>
            <p>
            <FaAngleRight className='ftextcolor'/>  <Link href="#" onClick={handleScrollToTop} as={Link} to="/terms_condition" className="ftextcolor">Term and Condition</Link>
            </p>
          
          </div>
          {/* Grid column */}
  
          
          {/* Grid column */}
        </div>
       
        {/* Grid row */}
      </div>
      <hr className='ftextcolor footerhr'></hr>
    </section>
    {/* Section: Links  */}
 
    {/* Copyright */}
   {/* Section: Social media */}
   <section
             className="d-flex justify-content-between p-4 servicebg footerbg"
             
             >
      {/* Left */}
      
      <div className="me-5 ftextcolor ">
        
      Copyright © 2024:
      <a className="ftextcolor" href="https://www.vtechacademy.in/"> VTech Academy</a>
    
      </div>
      {/* Left */}
  
      {/* Right */}
      <div>
        <a href="/" className="ftextcolor me-4">
        <FaFacebook size={25}/>
        </a>
       
        <a href="/" className="ftextcolor me-4">
        <FaInstagram size={25}/>
        </a>
        <a href="/" className="ftextcolor me-4">
        <FaTwitter size={25}/>
        </a>
        <a href="/" className="ftextcolor me-4">
        <FaLinkedin size={25}/>
        </a>
       
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
   
    {/* Copyright */}
   
  </footer>
  {/* Footer */}
  
  </div>
  
    </div>
  )
}
