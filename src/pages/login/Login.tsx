import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          width: '320px',
          padding: '40px 20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: '10px', fontWeight: 700, fontSize: '24px' }}
        >
          PicShare
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '20px', color: '#757575' }}
        >
          Login to start sharing
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Username"
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '150px', marginTop: '20px' }}
          onClick={() => console.log('Login Clicked')}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
