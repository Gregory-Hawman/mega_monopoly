import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
  return (
    <div className='menu'>
      <div className='menu-div border-b-2 border-white'>
          <Link to='/dashboard' className='menu-dash'> <h2>Dashboard</h2> </Link>
      </div>
      <div className='menu-div'>
        <Link to='/players' className='menu-link '> <h2>Players</h2> </Link>
        <Link to='/Banks' className='menu-link'> <h2>Banks</h2> </Link>
        <Link to='/Boards' className='menu-link'> <h2>Boards</h2> </Link>
      </div>
    </div>
  )
}


