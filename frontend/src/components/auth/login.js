import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        "email":"",
        "password":"",
    })
    const handleLogin = async (req,res)=>{
        let response = await axios.post('http://localhost:4000/login',{
            formData: formData
        });
        localStorage.setItem('token',response.token);
        navigate('/home');
    }
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
            <Typography variant="h5" component="h1" color="primary" sx={{ marginBottom: '1rem' }}>
                Login
            </Typography>
            <Box component="form">
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
                    color="primary"
                    fullWidth
                    sx={{
                        marginTop: '1.5rem',
                        padding: '0.5rem 0',
                        borderRadius: '5px',
                        backgroundColor: '#1976d2',
                        '&:hover': { backgroundColor: '#115293', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' },
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Paper>
    );
};

export default Login;
