import React from 'react'
import { Link } from 'react-router-dom'

import './User.css'

function BacktoHome() {
  return (
    <div>
      <div className="container text-center  my-5">
        <h3 className='text-danger'>This page doesn't exist click on the button below to get back to home</h3>
        <Link to='/' className='btn btn-danger bc m-4 w-50'>BACK TO HOME</Link>
      </div>
    </div>
  )
}

export default BacktoHome
