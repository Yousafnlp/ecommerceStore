import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { toast } from 'react-toastify'


function Navbar() {
  const navigate = useNavigate()
  let cart_details = useSelector(state => state.cartReducer.cart)
  console.log("______details__________", cart_details)
  let auth = localStorage.getItem('token')




  
    let fname = null
    let lname = null


  if(auth){
  
  let name = localStorage.getItem('token');
  let nameObject = JSON.parse(name); // Parse the JSON
  // // Extract the name value
  name = nameObject.token;
     fname = name.fname
     lname = name.lname
  
  console.log(fname + lname)
  }

  

  const logout = () => {
    localStorage.clear()
    navigate("/")
    toast.success("Logged Out Successfully")
  }

  return (
    <>
        <div>
            <div className="container-fluid my-bg  ">
              <div className="row">

            <div className="navbar-nav  d-flex justify-content-start align-items-start  col-3 mb-lg-0">

              { auth? (<>
                {/* <li className="nav-item"> */}
                      <h3 className="nav-link m-0 ps-2" aria-current="page" to="/">welcome<br/> {fname + " " + lname}</h3>
                    {/* </li> */}
                    </>) : null }
     

              </div>

<div className="col-6">
          <nav className="navbar navbar-expand-lg  navbar-light ">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <>

                
                  <ul className="navbar-nav mx-auto position-relat mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categories">Categories</Link>
                    </li>
                    <li style={{width: "fit-content"}}>
                      <div  className='pe-2'>
                        <div className="position-relative">
                          <Link className="nav-link me-2 pe-0" to="/shopping" tabIndex="-1" aria-disabled="true">Shopping Cart</Link>
                          <span className="position-absolute top-0 start-100 badge bg-dark">
                            {cart_details.length}
                          </span>
                        </div>
                      </div>
                    </li>



                                     </ul>


                 

                </>
              </div>
          </nav>
          </div>

          <div className="d-flex align-items-center col-3 justify-content-end">
                    {auth? (<>
                      {/* <li className="nav-item"> */}
                      <button className="bc btn btn-secondary" onClick={logout} tabIndex="-1" aria-disabled="true">Log out</button>
                    {/* </li> */}
                    </>
                    ):
                    
                    (<>
                       {/* <li className="nav-item"> */}
                      <Link className="bc btn btn-secondary" to="/user" tabIndex="-1" aria-disabled="true">Register / Login</Link>
                    {/* </li> */}
                  
                    </>
                    )}
                    
                  
                   </div>


            </div>
            </div>
        </div>
      </>
  )
}

export default Navbar
