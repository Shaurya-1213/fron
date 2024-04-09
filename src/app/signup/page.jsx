import React from 'react';
import classes from './signup.module.css';
import Link from 'next/link'

const Signup = () => {
  return (
    <div className={classes.body}>
      
      <div className={classes.main}>
        <h1 className={classes.mainHeading}>Signup</h1>
        <input className={classes.mainInput} type="text" placeholder='Username'/>
        <input className={classes.mainInput} type="password" placeholder='Password'/>
        <input className={classes.mainInput} type="email" placeholder='Your Email'/>
        <input className={classes.mainInput} type="number" placeholder='Contact'/>
        <button className={classes.btnLogin}>Signup</button>
        
      
      <div className={classes.register}>
        <h1 className={classes.registerHeading}><Link href="/login">Login</Link></h1> 
         
      </div>
      </div>
      <img className={classes.imgSpiderman} src="./spiderman.png" alt="Spiderman" />
    </div>
  )
}

export default Signup