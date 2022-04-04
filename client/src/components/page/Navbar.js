import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  let navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleLogout = (e) => {
    e.preventDefault();
    if (token) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  const handleTitleClick = (e) => {
    e.preventDefault();
    if (token) {
      navigate('/menu')
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
        {token 
        ? 
          <button className='login-button' onClick={handleLogout}> <h2>Log Out</h2> </button> 
        : 
          <div className='flex'>
            <Link to='/login' className='login-button'> <h2>Login</h2> </Link>
            <Link to='/signup' className='login-button'> <h2>Sign-Up</h2> </Link>
          </div>
        }
      </div>
    </div>
  )
}
