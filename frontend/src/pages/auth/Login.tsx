import React, { useState } from 'react';
import { Form, Loading, Modal } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import authServices from '../../api/authService';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setOpen(false);

    const handleLogin = async () => {
        setIsLoading(true);  
        try {
            const data = await authServices.login(username, password);
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/');
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
                topTitle="Welcome Back to Task Manager!"
                title="Login"
                buttonText="Login"
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                onSubmit={handleLogin}
                linkText="Don't have an account?"
                linkTo="/register"
            />

            <Modal open={open} error={error} handleClose={handleClose} />
        </Container>
    );
};

export default Login;
