import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PreProtectedAdmin() {
  let auth = localStorage.getItem('token')

  return (
    <div>
      {auth? <Outlet/>: <Navigate to="/"/>}
    </div>
  )
}

export default PreProtectedAdmin
