import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function RegisterForm() {
  const [confirmPassword, setConfirmPassword] = useState('');

  const [formData, setFormData] = useState({
    
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch('http://localhost:8080/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password
    })
  });

  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }


  const data = await response.json();
  console.log(data);
};


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="fname"
            autoFocus
            value={formData.first_name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            autoComplete="lname"
            value={formData.last_name}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="password"
            id="confirm_password"
            autoComplete="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>

          <Typography variant="body2" align="center">
            Already have an account? <Link to="/login">Sign in</Link>
          </Typography>

        </Box>
      </Box>
    </Container>
  );
}

export default RegisterForm;
