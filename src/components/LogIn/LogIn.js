import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Google from './GoogleLogo.png';

import './LogIn.css'

export default function LogIn(props) {

    const {setShowLoginModal} = props;

    let [isLogin,setIsLogin] = useState(true);

    return <Box className="login-container">
        <Box className="login-box">
        <span className="material-icons close-login" onClick={() => {setShowLoginModal(false)}}>cancel</span>
            {isLogin?<h1>Sign In</h1>:<h1>Sign Up</h1>}
            <p>Buy and sell coupons from various platforms</p>
            <form className='login-form'>
                <Box className='email-box'>
                <span class="material-icons">email</span>
                    <TextField className="email-input" id="outlined-basic" label="Email Address" variant="outlined" />
                </Box>
                <Box className='email-box'>
                <span class="material-icons">lock</span>
                    <TextField className="email-input" type='password' id="outlined-basic" label="Password" variant="outlined" />
                </Box>
                {isLogin?
                        <Button sx={{background: 'linear-gradient(90deg, #2FB8FF 0%, #9EECD9 100%)',
                        margin: '15px 0px',
                         borderRadius: 50, width: '290px'}} size='large' variant="contained">Sign In</Button> : 
                         <Button sx={{background: 'linear-gradient(90deg, #2FB8FF 0%, #9EECD9 100%)',
                            margin: '15px 0px',
                            borderRadius: 50, width: '290px'}} size='large' variant="contained">Sign Up</Button>}
            </form>
            <p>Or</p>
                <Box className='google-login'>
                    <img src={Google} alt='google'></img>
                    <span>Continue with Google</span>
                </Box>
                <div className='line'></div>
                <Box className="signup-message">
                    {isLogin?<><span>Don't have an account? </span><a onClick={() => {setIsLogin(false)}}>Sign Up</a></> :
                    <><span>Already have an account? </span><a onClick={() => {setIsLogin(true)}}>Sign In</a></>}
                </Box>
        </Box>
    </Box>
}