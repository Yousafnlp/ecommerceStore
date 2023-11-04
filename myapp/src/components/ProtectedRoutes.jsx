import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import TooastErr from './TooastErr'


function ProtectedRoutes() {
  let auth = localStorage.getItem('token')

  return (
    <div>
     { auth ? <Outlet/> : <> <TooastErr/><Navigate to='/user'/></> }
    </div>
  )
}

export default ProtectedRoutes
