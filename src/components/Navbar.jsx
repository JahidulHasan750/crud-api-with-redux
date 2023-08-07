import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartProduct= useSelector(state=>state.cart)
  return (
    <div className="navbar bg-base-300 ">
  
  <div className="navbar-start ">
  <Link  className="btn btn-ghost normal-case text-xl">Shop</Link>
    <ul className="menu menu-horizontal text-xl px-1">
      <li><Link to='/'>Product</Link></li>
     
     
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/cart' className="btn">My cart {cartProduct.length} </Link>
  </div>
</div>
  )
}

export default Navbar