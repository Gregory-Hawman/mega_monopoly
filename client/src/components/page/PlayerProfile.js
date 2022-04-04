import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from '../../utilities/AxiosWithAuth';

export default function PlayerProfile() {
  return (
    <div>
        <Link to='/' className=''> <h2>Back</h2> </Link>
        Player Profile
    </div>
  )
}
