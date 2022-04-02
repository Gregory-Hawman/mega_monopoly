import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  const handleTitleClick = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    if (token) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }

  return (
    <div className="navbar">
      <div className='navbar-logo'>MM</div>
      <div>
        <button onClick={handleTitleClick}> <p>Mega-Monopoly</p> </button>
      </div>
      <div className='flex mx-4 my-2'>
        <button className='login-button' onClick={handleLogout}> <h2>Log Out</h2> </button>
        <Link to='/login' className='login-button'> <h2>Login</h2> </Link>
        <Link to='/signup' className='login-button'> <h2>Sign-Up</h2> </Link>
      </div>
    </div>
  )
}
