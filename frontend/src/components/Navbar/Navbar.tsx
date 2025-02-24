import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { task, button } from './Style';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    const token = localStorage.getItem('token');
    return (
        <AppBar position="sticky" color="secondary">
            <Toolbar>
            <Typography variant="h6" sx={task}>
                TASK MANAGER
            </Typography>
            {token ? (
                <Button sx={button} onClick={logout}>
                    Log Out
                </Button>
            ) : (
                <div>
                    <Button sx={button} onClick={() => navigate('/login')}>
                        Log In
                    </Button>
                    &nbsp;
                    <Button sx={button} onClick={() => navigate('/register')}>
                        Register
                    </Button>
                </div>
            )}
            

            </Toolbar>
        </AppBar>
    )
}

export default Navbar