import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
      <div className='menu-div border-b-2 border-white'>
      </div>
      <div className='menu-div'>
        <Link to='/Games' className='menu-link '> <h2>Games</h2> </Link>
        <Link to='/player-profile' className='menu-dash'> <h2>Player Profile</h2> </Link>
        <Link to='/Worlds' className='menu-link'> <h2>Worlds</h2> </Link>
      </div>
    </div>
  )
}

// Games,
  // Games player is apart of the game
  // Create new game
    // Once in game
      // Player Profile
      // Banks 
      // Boards / Properties
        // Full Board
        // Individual
      // Actions
        // Roll, 
        // Buy, 
        // Trade, 
          // => players (in current game)
        // Auction, 
        // Mortgage
          // => Boards Properties

// Worlds, 
  // Worlds List
  // Create new World
    // Add Properties

// Player Profile
  // Games you are in
    // Current snapshot of game (money, properties in each world)
  // Token

// 

{/* <Link to='/players' className='menu-link '> <h2>Players</h2> </Link>
<Link to='/Banks' className='menu-link'> <h2>Banks</h2> </Link>
<Link to='/Boards' className='menu-link'> <h2>Boards</h2> </Link> */}
