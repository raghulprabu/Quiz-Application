import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css'; 
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Register() {


    const [showPassword, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const handleClickShowPassword = () => {
        setPassword(prev => !prev)
    }

    const handleClickConfPassword = () => {
        setConfirmPassword(prev => !prev)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.ConfirmPassword) {
            alert("password mismatch")
            return
        }
        console.log(data);
    };

    return (
        <>
            <Container maxWidth="xs">
                <Paper className="login" elevation={3}>
                    <img className="images" src='./user.png' alt='login' />
                    <Typography variant='h4' align='center' gutterBottom>
                        Register
                    </Typography>

                    <form className='forms' onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            className="Emailtext"
                            label='User'
                            type='User'
                            variant='outlined'
                            fullWidth
                            {...register('User', {
                                required: 'user is required',
                            })}
                            error={Boolean(errors.User)}
                            helperText={errors.User ? errors.User.message : ''}
                        />
                        <TextField
                            className="Emailtext"
                            label='Email'
                            type='email'
                            variant='outlined'
                            fullWidth
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email format',
                                },
                            })}
                            error={Boolean(errors.email)}
                            helperText={errors.email ? errors.email.message : ''}
                        />
                        <FormControl sx={{ marginBottom: '16px', width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Password'
                                variant='outlined'

                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },

                                }
                                )}
                                error={Boolean(errors.password)}
                                helperText={errors.password ? errors.password.message : ''}
                            />
                        </FormControl>
                        <FormControl sx={{ marginBottom: '16px', width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={confirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickConfPassword}
                                            edge="end"
                                        >
                                            {confirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Confirm Password'
                                variant='outlined'
                                {...register('ConfirmPassword', {
                                    required: ' ConfirmPassword is required',
                                    minLength: {
                                        value: 6,
                                        message: ' ConfirmPassword must be at least 6 characters long',
                                    },
                                })}
                                error={Boolean(errors.ConfirmPassword)}
                                helperText={errors.ConfirmPassword ? errors.ConfirmPassword.message : ''}
                            />
                        </FormControl>
                        <Button
                            className="Passbutton"
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Register
                        </Button>
                    </form>
                    <div>
                        <Link to="/" className="link">
                            Aleardy Registered? Login
                        </Link>
                    </div>
                </Paper>
            </Container>
        </>
    );
}




