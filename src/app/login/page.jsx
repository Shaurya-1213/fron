import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    <button className={classes.loginBtn}>Sumbit</button>
    </div>
  )
}

export default Login;