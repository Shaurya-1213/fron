import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div className={classes.body}>
      
      <div className={classes.main}>
        <h1 className={classes.mainHeading}>Log in</h1>
        <input className={classes.mainInput} type="text" placeholder='Username'/>
        <input className={classes.mainInput} type="password" placeholder='password'/>
        <button className={classes.btnLogin}>Login</button>
        
      
      <div className={classes.register}>
        <h1 className={classes.registerHeading}>Register</h1>

      </div>
      </div>
      <img className={classes.imgSpiderman} src="./spiderman.png" alt="Spiderman" />
    </div>
  )
}

export default Login