import React from 'react';
import neflixLogo from '../../assets/images/neflixLogo.png';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-logo">
            <Link to='/' style={{textDecoration:'none', color:'white'}}>
                <img src={neflixLogo} alt="" width='150'/>
            </Link>
        </div>
        <div className="login-form">
            <div className='title'>Sign In</div>
            <form action="">
                <input type="text" placeholder='Email or mobile Number' id='email'/>
                <input type="password" placeholder='password'/>
                <button className='login'>Login</button>
                <p>Or</p>
                <button className='code-login'>Use a Sign-in Code</button>
                <p className='forgot'>Forgot Password?</p>
            </form>
        </div>
    </div>
  )
}

export default Login;