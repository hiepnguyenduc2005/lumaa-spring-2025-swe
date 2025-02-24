import React from "react";
import { Link } from "react-router-dom";
import { ask, button, font, form, inputS, main, titleS } from "./Style";
import { Box, Button, TextField, Typography } from "@mui/material";

interface FormProps {
    topTitle: string; 
    title: string; 
    buttonText: string; 
    username: string;
    password: string;
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
    onSubmit: () => void;
    showRegisterLink?: boolean;
    linkText?: string; 
    linkTo?: string; 
}

const Form: React.FC<FormProps> = ({
    topTitle,
    title,
    buttonText,
    username,
    password,
    setUsername,
    setPassword,
    onSubmit,
    showRegisterLink = true,
    linkText = "Register here", 
    linkTo = "/register",
}) => {
    return (
        <Box sx={main}>
            <Typography sx={font} variant="h4" gutterBottom>
                {topTitle}
            </Typography>

            <Box component="form" sx={form} onSubmit={(e) => e.preventDefault()}>
                <Typography variant="h4" sx={titleS}>
                    {title}
                </Typography>

                <TextField
                    sx={inputS}
                    fullWidth
                    margin="normal"
                    label="Username"
                    variant="outlined"
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    sx={inputS}
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button fullWidth variant="contained" color="primary" sx={button} onClick={onSubmit}>
                    {buttonText}
                </Button>

                {showRegisterLink && (
                    <Typography variant="body2" sx={ask}>
                        {linkText}{" "}
                        <Link to={linkTo}>
                            Click here
                        </Link>
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Form;
