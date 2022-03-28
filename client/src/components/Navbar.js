import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className='navbar-logo'>MM</div>
      <div>
        <Link to='/'> <p>Mega-Monopoly</p> </Link>
      </div>
      <div className='flex mx-4 my-2'>
        <Link to='/login' className='login-button'> <h2>Login</h2> </Link>
        <Link to='/signup' className='login-button'> <h2>Sign-Up</h2> </Link>
      </div>
    </div>
  )
}
