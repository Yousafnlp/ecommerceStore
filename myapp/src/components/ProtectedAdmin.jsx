import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

function ProtectedAdmin() {

  const [isAdmin, setIsAdmin] = useState(false);

  let token = localStorage.getItem('token');
  let tokenObject = JSON.parse(token); // Parse the JSON
  // Extract the token value
  token = tokenObject.token;
  token = token.token

  console.log(token)

  const headers = {
    'authorization': ` ${token}`
  };



  let verifyToken = async () => {

    try {
      let response = await fetch('http://localhost:6001/admin', {
        method: 'GET',
        headers: headers
      });
      response = await response.json();
      // console.log("__________", response)
      // console.log(headers)

      if (response.message === 'you are admin') {

        setIsAdmin(true);
      } else {
        setIsAdmin(false);
        console.error('Access denied:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };
  console.log(isAdmin)

  useEffect(() => {

    verifyToken();
  }, []);

  return (
    <div>
      {isAdmin ? (<>
        <Outlet />
</>
      ) : (<>
        <div className="container text-center  my-5">
          <h3 className='text-danger'>This page doesn't exist click on the button below to get back to home</h3>
          <Link to='/' className='btn btn-danger bc m-4 w-50'>BACK TO HOME</Link>

        </div>
      </>

      )}
    </div>
  );
}

export default ProtectedAdmin;
