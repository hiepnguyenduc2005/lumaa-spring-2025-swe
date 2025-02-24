import React, { useState } from 'react';
import { Form, Loading, Modal } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
// import { BASE_URL } from '../../api/apiCall';
// import axios from 'axios';
import authService from '../../api/authService';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false); 

    const handleClose = () => setOpen(false);

    const handleRegister = async () => {
        setIsLoading(true);  
        try {
            const data = await authService.register(username, password);
            if (data.message) {
                navigate('/login');
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred. Please try again.');
            setOpen(true);
        } finally {
            setIsLoading(false); 
        }
    };

    if (isLoading) return <Loading />;

    return (
        <Container maxWidth="sm">
            <Form
                topTitle="Join Us at Task Manager!"
                title="Register"
                buttonText="Register"
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                onSubmit={handleRegister}
                linkText="Already have an account?"
                linkTo="/login"
            />

            <Modal open={open} error={error} handleClose={handleClose} />
        </Container>
    );
};

export default Register;
