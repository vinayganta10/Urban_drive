import React,{useState} from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const Signup = () => {
    return (
        <Paper elevation={6} sx={{
            padding: '2rem',
            width: '300px',
            margin: '2rem auto',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)' },
            backgroundColor: '#f5f5f5'
        }}>
            <Typography variant="h5" component="h1" color="secondary" sx={{ marginBottom: '1rem' }}>
                Signup
            </Typography>
            <Box component="form">
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                        marginTop: '1.5rem',
                        padding: '0.5rem 0',
                        borderRadius: '5px',
                        backgroundColor: '#9c27b0',
                        '&:hover': { backgroundColor: '#6d1b7b', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                    }}
                >
                    Signup
                </Button>
            </Box>
        </Paper>
    );
};

export default Signup;
