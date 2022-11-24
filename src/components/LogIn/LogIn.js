import { TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import Google from './GoogleLogo.png';

import './LogIn.css'
import { useAuth } from '../../Context/AuthProvider';

export default function LogIn(props) {

    const {isLogin = false} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const { signIn, signUp } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const [isSignIn, setIsSignIn] = useState(false);

    const redirect = location.state?.path || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let result;
        if(isSignIn) {
            result = await signIn(emailRef.current.value, passwordRef.current.value)
        } else {
            result = await signUp(emailRef.current.value, passwordRef.current.value);
        }
        if(result === 'Success') {
            setIsLoading(false);
            console.log(redirect);
            navigate(redirect);
        } else {
            setIsLoading(false);
            setError(result);
        }
    }

    console.log(redirect);

    return <Box className="login-container">
        <Box className="login-box">
        <span className="material-icons close-login" onClick={() => navigate("/", {replace: true})}>cancel</span>
            {isLogin?<h1>Sign In</h1>:<h1>Sign Up</h1>}
            <p>Buy and sell coupons from various platforms</p>
            <Box component='form' className='login-form' onSubmit={handleSubmit}>
                <Box className='email-box'>
                <span className="material-icons">email</span>
                    <TextField inputRef={emailRef} className="email-input" type='email' id="outlined-basic" label="Email Address" variant="outlined" required/>
                </Box>
                <Box className='email-box'>
                <span className="material-icons">lock</span>
                    <TextField inputRef={passwordRef} className="email-input" type='password' id="outlined-basic" label="Password" variant="outlined" required/>
                </Box>
                <Typography className="error-text">{error}</Typography>
                {isLogin?
                        <LoadingButton type='submit' onClick={() => {setIsSignIn(true)}} loading={isLoading} sx={{background: 'linear-gradient(90deg, #2FB8FF 0%, #9EECD9 100%)',
                        margin: '15px 0px',
                         borderRadius: 50, width: '290px'}} size='large' variant="contained">Sign In</LoadingButton> : 
                         <LoadingButton type='submit' onClick={() => {setIsSignIn(false)}} loading={isLoading} sx={{background: 'linear-gradient(90deg, #2FB8FF 0%, #9EECD9 100%)',
                            margin: '15px 0px',
                            borderRadius: 50, width: '290px'}} size='large' variant="contained">Sign Up</LoadingButton>}
            </Box>
            <p>Or</p>
                <Box className='google-login'>
                    <img src={Google} alt='google'></img>
                    <span>Continue with Google</span>
                </Box>
                <div className='line'></div>
                <Box className="signup-message">
                    {isLogin?<><span>Don't have an account? </span><Link to="/signUp">Sign Up</Link></> :
                    <><span>Already have an account? </span><Link to="/logIn">Sign In</Link></>}
                </Box>
        </Box>
    </Box>
}