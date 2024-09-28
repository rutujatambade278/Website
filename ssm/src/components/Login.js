// // // import React, { useState } from 'react';
// // // import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link, Paper, Box, Snackbar, Alert } from '@mui/material';
// // // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // const theme = createTheme();

// // // const Login = () => {
// // //   const [formData, setFormData] = useState({
// // //     userName: '',
// // //     userPassword: ''
// // //   });
// // //   const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('http://localhost:8585/authenticate', formData);
// // //       console.log('Login successful:', response.data);
// // //       setAlert({ open: true, severity: 'success', message: 'Login successful' });
// // //       setTimeout(() => {
// // //         navigate('/dashboard');
// // //       }, 1500); // Redirect to dashboard after 1.5 seconds
// // //     } catch (error) {
// // //       console.error('Login failed:', error);
// // //       setAlert({ open: true, severity: 'error', message: 'Login failed. Please try again.' });
// // //     }
// // //   };

// // //   const handleClose = () => {
// // //     setAlert({ open: false, severity: '', message: '' });
// // //   };

// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// // //         <CssBaseline />
// // //         <Paper elevation={10} sx={{ padding: 4, textAlign: 'center', width: '100%', maxWidth: '400px' }}>
// // //           <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
// // //             <LockOutlinedIcon />
// // //           </Avatar>
// // //           <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
// // //             Sign in
// // //           </Typography>
// // //           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
// // //             <TextField
// // //               margin="normal"
// // //               required
// // //               fullWidth
// // //               id="userName"
// // //               label="User Name"
// // //               name="userName"
// // //               autoComplete="email"
// // //               autoFocus
// // //               value={formData.userName}
// // //               onChange={handleChange}
// // //             />
// // //             <TextField
// // //               margin="normal"
// // //               required
// // //               fullWidth
// // //               name="userPassword"
// // //               label="Password"
// // //               type="password"
// // //               id="userPassword"
// // //               autoComplete="current-password"
// // //               value={formData.userPassword}
// // //               onChange={handleChange}
// // //             />
// // //             <FormControlLabel
// // //               control={<Checkbox value="remember" color="primary" />}
// // //               label="Remember me"
// // //               sx={{ mt: 1 }}
// // //             />
// // //             <Button
// // //               type="submit"
// // //               fullWidth
// // //               variant="contained"
// // //               sx={{ mt: 3, mb: 2 }}
// // //             >
// // //               Sign In
// // //             </Button>
// // //             <Grid container>
// // //               <Grid item xs>
// // //                 <Link href="#" variant="body2">
// // //                   Forgot password?
// // //                 </Link>
// // //               </Grid>
// // //               <Grid item>
// // //                 <Link href="#" variant="body2">
// // //                   {"Don't have an account? Sign Up"}
// // //                 </Link>
// // //               </Grid>
// // //             </Grid>
// // //           </Box>
// // //         </Paper>
// // //         <Snackbar
// // //           open={alert.open}
// // //           autoHideDuration={6000}
// // //           onClose={handleClose}
// // //         >
// // //           <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
// // //             {alert.message}
// // //           </Alert>
// // //         </Snackbar>
// // //       </Container>
// // //     </ThemeProvider>
// // //   );
// // // };

// // // export default Login;


// // import './login.css';
// // import React, { useState } from 'react';
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import { Row, Col, Container } from 'react-bootstrap';
// // import { FaFacebook } from 'react-icons/fa';
// // import { FcGoogle } from 'react-icons/fc';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import API_BASE_URL from './Api'; 

// // export default function Login() {
// //   const [formData, setFormData] = useState({
// //     usernameOrEmail: '',
// //     password: ''
// //   });

// //   const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('${API_BASE_URL}/api/auth/login', formData);
// //       console.log('Login successful:', response.data);
// //       setAlert({ open: true, severity: 'success', message: 'Login successful' });
// //       setTimeout(() => {
// //         navigate('/dashboard');
// //       }, 1500); // Redirect to dashboard after 1.5 seconds
// //     } catch (error) {
// //       console.error('Login failed:', error);
// //       setAlert({ open: true, severity: 'error', message: 'Login failed. Please try again.' });
// //     }
// //   };

// //   const handleClose = () => {
// //     setAlert({ open: false, severity: '', message: '' });
// //   };

// //   return (
// //     <div>
// //       <Container className='d-flex justify-content-center'>
// //         <Card className='card-first shadow' style={{ width: '24rem' }}>
// //           <Card.Title className='title text-center mt-3'>Sign In With</Card.Title>
// //           <Row className='justify-content-center'>
// //             {/* <Col xs='auto'>
// //               <Card className='card-Facebook shadow'>
// //                 <Card.Body className='d-flex align-items-center justify-content-center'>
// //                   <FaFacebook size={24} className='me-2 text-primary icon' />
// //                   <div>Facebook</div>
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //             <Col xs='auto'>
// //               <Card className='card-google shadow'>
// //                 <Card.Body className='d-flex align-items-center justify-content-center'>
// //                   <FcGoogle size={24} className='me-2 icon' />
// //                   <div>Google</div>
// //                 </Card.Body>
// //               </Card>
// //             </Col> */}
// //           </Row>
// //           <Card.Body>
// //             <Form onSubmit={handleSubmit}>
// //               <Form.Group className="label mb-3" controlId="formBasicEmail">
// //                 <Form.Label>Email address</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   placeholder="Enter email"
// //                   name="usernameOrEmail"
// //                   value={formData.usernameOrEmail}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>
// //               <Form.Group className="label mb-3" controlId="formBasicPassword">
// //                 <Form.Label>Password</Form.Label>
// //                 <Form.Control
// //                   type="password"
// //                   placeholder="Password"
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" className='mt-2 mb-3' type="submit">
// //                 Sign In
// //               </Button>
// //             </Form>
// //             {/* <Card.Text>Not a member? <a href='#signup'>Sign Up Now</a></Card.Text> */}
// //           </Card.Body>
// //         </Card>
// //       </Container>
// //     </div>
// //   );
// // }


// import './login.css';
// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Row, Container } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import API_BASE_URL from './Api'; // Make sure to import API_BASE_URL

// export default function Login() {
//   const [formData, setFormData] = useState({
//     usernameOrEmail: '',
//     password: ''
//   });

//   const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API_BASE_URL}/api/auth/login`, formData);
//       console.log('Login successful:', response.data);
//       //const token = response.data.accessToken;
//       //console.log("response.data.token:"+response.data.accessToken);
//       //localStorage.setItem('username', 'GeeksforGeeks');
//       sessionStorage.setItem('token', response.data.accessToken); 
//       console.log(sessionStorage.getItem('token'));
//       //sessionStorage.getItem('token');
      
//       setAlert({ open: true, severity: 'success', message: 'Login successful' });
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 1500); 
//     } catch (error) {
//       console.error('Login failed:', error);
//       setAlert({ open: true, severity: 'error', message: 'Login failed. Please try again.' });
//     }
//   };

//   const handleClose = () => {
//     setAlert({ open: false, severity: '', message: '' });
//   };

//   return (
//     <div>
//       <Container className='d-flex justify-content-center'>
//         <Card className='card-first shadow' style={{ width: '24rem' }}>
//           <Card.Title className='title text-center mt-3'>Sign In</Card.Title>
//           <Row className='justify-content-center'>
//           </Row>
//           <Card.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="label mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   name="usernameOrEmail"
//                   value={formData.usernameOrEmail}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group className="label mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Button variant="primary" className='mt-2 mb-3' type="submit">
//                 Sign In
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }


import './login.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import API_BASE_URL from './Api'; // Make sure to import API_BASE_URL
import Alert from 'react-bootstrap/Alert';

export default function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, formData);
      console.log('Login successful:', response.data);
      sessionStorage.setItem('token', response.data.accessToken); 
      console.log(sessionStorage.getItem('token'));

      setAlert({ show: true, variant: 'success', message: 'Login successful' });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500); 
    } catch (error) {
      console.error('Login failed:', error);
      setAlert({ show: true, variant: 'danger', message: 'Login failed.Please Check Email And Password.' });
    }
  };

  const handleClose = () => {
    setAlert({ show: false, variant: '', message: '' });
  };

  return (
    <div>
      <Container className='d-flex justify-content-center'>
        <Card className='card-first shadow' style={{ width: '24rem' }}>
          <Card.Title className='title text-center mt-3'>Sign In</Card.Title>
          <Row className='justify-content-center'>
          </Row>
          <Card.Body>
            {alert.show && (
              <Alert variant={alert.variant} onClose={handleClose} dismissible>
                {alert.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="label mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="label mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" className='mt-2 mb-3' type="submit">
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
