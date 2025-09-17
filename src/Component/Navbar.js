import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="ShopSense Logo" className="logo-img" />
        </Link>
      </div>
      <div className="link-container">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
        <Link className="nav-link" to="/signin">Signin</Link>
        <Link className="nav-link1" to="/cart">Cart<FaCartArrowDown /></Link>
      </div>
    </div>
  )
}

export default Navbar