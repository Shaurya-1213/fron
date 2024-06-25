'use client'
import React from 'react';
import classes from './signup.module.css';
import Link from 'next/link'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name : Yup.string().min(4, 'Enter Full Name').required('Name is Required'),
  email : Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(6,'Password should be at least  6 characters').required('Password Is Required')
  .matches(/a-z/, 'Must Use Lowercase').matches(/A-Z/, 'Must Use Uppercase').matches(/0-9/, 'Must Use Number')
  .matches(/\w/, 'Must Use Special Character'),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"),null], "Passwords must match")
  .required('Password Is Required'),
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit : (values) => {
      console.log(values);//send values to backend
    },
    validationSchema : SignupSchema
  })
  return (
    <div className={classes.body}>
      
      <div className={classes.main}>
        <h1 className={classes.mainHeading}>Signup</h1>
        <form onSubmit={signupForm.handleSubmit}>
        <input className={classes.mainInput} id= "name" onChange={signupForm.handleChange} value={signupForm.values.name} type="text" placeholder='Username'/>
        {signupForm.touched.name &&(
          <small className="text-light">{signupForm.errors.name}</small>
        )}
        <input className={classes.mainInput} id= "email" onChange={signupForm.handleChange} value={signupForm.values.email} type="email" placeholder='Your Email'/>
        {signupForm.touched.email &&(
          <small className="text-light">{signupForm.errors.email}</small>
        )}
        <input className={classes.mainInput} id= "password" onChange={signupForm.handleChange} value={signupForm.values.password} type="password" placeholder='Password'/>
        {signupForm.touched.password &&(
          <small className="text-light">{signupForm.errors.password}</small>
        )}
        <input className={classes.mainInput} id= "confirmPassword" onChange={signupForm.handleChange} value={signupForm.values.confirmPassword} type="password" placeholder='Confirm Password'/>
        {signupForm.touched.confirmPassword &&(
          <small className="text-light">{signupForm.errors.confirmPassword}</small>
        )}
        <button className={classes.btnLogin} type='submit'>Signup</button>
        </form>
      
      <div className={classes.register}>
        <h1 className={classes.registerHeading}><Link href="/login">Login</Link></h1> 
         <h1 className={classes.registerHeading}><Link href="/login">Login</Link></h1> <h1 className={classes.registerHeading}><Link href="/login">Login</Link></h1> <h1 className={classes.registerHeading}><Link href="/login">Login</Link></h1> 
      </div>
      </div>
      <img className={classes.imgSpiderman} src="./spiderman.png" alt="Spiderman" />
      <img className={classes.imgSpiderman} src="./spiderman.png" alt="Spiderman" />
    </div>
  )
}

export default Signup
