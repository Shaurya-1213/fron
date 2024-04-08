import React from 'react'
import vercel from './login/vercel.svg'

const home = () => {
  return (
    <div >
      <h1 style={{background:"red",fontSize:50, textAlign:'center'}}>Welcome To Home Page</h1>

    <button className='mybtn'>My Button</button>
    <img src={vercel.src} alt="" />
    </div>
  )
}

export default home