import React from 'react';
import LoginBtn from './LoginBtn';
import { Navigate } from 'react-router-dom';




function LoginProtected() {
  let auth = localStorage.getItem('token')

 
  return (
    <div>
      {auth ? (<Navigate to="/"/>) : (<><LoginBtn/></>)}

   

    </div>
  );
}

export default LoginProtected;
