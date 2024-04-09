'use client'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Event Handling</h1>
      <hr/>

      <button className='btn btn-primary' onClick={ () => {alert('Event Handled')} }>Submit</button>
    </div>
  )
}

export default page