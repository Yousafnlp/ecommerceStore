import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

function LoginBtn() {


      
  return (
    <div>
        <div className='my-bg-bc  container-fluid'>
       <nav className=" " style={{width: "250px"}}>
        <div className="container">
            <div >
                <>
                    {/* <ul className="navbar-nav "> */}
                        {/* <li className="nav-item"> */}
                            <Link className="btn btn-primary bc m-2" aria-current="page" to="register">sign up</Link>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                            <Link className="btn btn-primary m-2 bc" to="login" tabindex="-1" aria-disabled="true">login</Link>
                        {/* </li> */}
                    {/* </ul> */}
                    </>
            </div>
        </div>
    </nav>
    </div>


    <Outlet />

    </div>
  )
}

export default LoginBtn
