import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

function BreadCrum() {



  return (
<>

<nav className="navbar navbar-expand-lg navbar-light my-bg-bc">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="btn btn-primary bc m-2" aria-current="page" to="jewellery">Jewellery</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-primary bc m-2" to="mensclothing">MEN'S CLOTHING</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-primary bc m-2" to="womensclothing" tabindex="-1" aria-disabled="true">WOMEN'S CLOTHING</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-primary bc m-2" to="electronics" tabindex="-1" aria-disabled="true">ELECTRONICS</Link>
        </li>
      </ul>
    </div>
  </div>
 
  </nav>
    <Outlet/>
  </>
  )
}

export default BreadCrum
