

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home_Nav from './Home_Nav';
import Footerex from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import JavaPage from './JavaPage';
import PythonPage from './PythonPage';
import MernStack from './MernStack';
import Dashboard from './components/Dashboard';
import GetContact from './components/GetContact';
import GetEnquiry from './components/GetEnquiry';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialMediaIcons from './components/SocialMediaIcons';
import EnquiryForm from './components/EnquiryForm';

import AddCourse from './components/Course/AddCourse';

import CourseButton from './components/Course/CourseButton';
import CourseDetail from './components/Course/CourseDetail';
import AddBatchs from './components/Batch/AddBatchs';
import CourseButtonBatch from './components/Batch/CourseButtonBatch';
import Institute_profile from './components/Institute/Institute_profile';
import NewContact from './components/Institute/NewContact';
import AddInstitute from './components/Institute/AddInstitute';
import InstituteButton from './components/Institute/InstituteButton';
import InstituteDetails from './components/Institute/InstituteDetail';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <MainContent />
      </Router>
    </div>
  );
}

function MainContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <NewContact />}
      {!isDashboard && <Home_Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/mern" element={<MernStack />} />
        <Route path="/enquiryform" element={<EnquiryForm />} />
        <Route path="/socialmedia" element={<SocialMediaIcons />} />
        {/* <Route path="/GetInTouch" element={<GetInTouch/>} /> */}
        
        {/* /dashboard navigation */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index />
          <Route path="GetContact" element={<GetContact />} />
          <Route path="GetEnquiry" element={<GetEnquiry />} />
          <Route path="AddCourse" element={<AddCourse />} />
          {/* <Route path="AddBatch" element={<AddBatch />} /> */}
          <Route path="Institute_profile" element={<Institute_profile />} />
          <Route path="CourseButton" element={<CourseButton />} />
          <Route path="CourseDetail" element={<CourseDetail />} />
          <Route path="AddBatchs" element={<AddBatchs />} />
          <Route path="CourseButtonBatch" element={<CourseButtonBatch />} />
          <Route path="NewContact" element={<NewContact />} />
          <Route path="AddInstitute" element={<AddInstitute />} />
          <Route path="InstituteButton" element={<InstituteButton />} />
          <Route path="InstituteDetails" element={<InstituteDetails />} />
          
        </Route>
      </Routes>
      {!isDashboard && <Footerex />}
    </>
  );
}

export default App;
