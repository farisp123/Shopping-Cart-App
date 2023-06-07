import React from 'react'
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-end">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
}
