import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import SocialMediaIcons from './SocialMediaIcons';
import API_BASE_URL from './Api'; 

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const IframeContainer = styled('div')({
  width: '100%',
  height: '400px',
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/contactus/add/addContactDetails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            message: '',
          });
        } else {
          setSubmitStatus('Failed to submit the form');
        }
      } catch (error) {
        setSubmitStatus('Error submitting the form');
      }
    } else {
      setSubmitStatus('Please fix the errors in the form');
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.phoneNo) tempErrors.phoneNo = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phoneNo)) tempErrors.phoneNo = 'Phone number is invalid';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <>
      <div className="about-us">
        <div>
          <img src="../image/bgcontact1.png" width="1300" height="200" alt="About Logo" />
        </div>
        
        <div className="text-overlay">
          <h1><b>CONTACT US</b></h1>
        </div>
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Root>
            <Container>
              <Typography variant="h4" gutterBottom align="center">
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph align="center">
                We would love to hear from you. Please fill out the form below and we will get in touch with you shortly.
              </Typography>
              <StyledCard>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          variant="outlined"
                          required
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          variant="outlined"
                          required
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          variant="outlined"
                          required
                          type="tel"
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          error={!!errors.phoneNo}
                          helperText={errors.phoneNo}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          required
                          multiline
                          rows={2}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                        />
                      </Grid>
                      <Grid item xs={12} align="center">
                        <Button variant="contained" color="primary" size="large" type="submit">
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  {submitStatus && (
                    <Typography variant="body1" align="center" color="primary" style={{ marginTop: '20px' }}>
                      {submitStatus}
                    </Typography>
                  )}
                </CardContent>
              </StyledCard>
            </Container>
          </Root>
        </ThemeProvider>

        <IframeContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.92834307559!2d73.857868!3d18.46181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab05467342c7c971%3A0x65f75afd39399fe8!2sIrtcm%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1719919394388!5m2!1sen!2sin"
            width="1400"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </IframeContainer><br></br>

        <SocialMediaIcons />
      </div>
    </>
  );
};

export default ContactUs;
