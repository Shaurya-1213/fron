'use client'
import React, { useEffect } from 'react'
import './bootstrap/dist/css/bootstrap.min.css'

const Template = ({children}) => {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
     
    }, [])
  
  return (
    <div>{children}
      <h1>Template</h1>
    </div>
  )
}

export default Template