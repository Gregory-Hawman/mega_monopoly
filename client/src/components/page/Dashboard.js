import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from '../../utilities/AxiosWithAuth';

export default function Dashboard() {
  const [data, setData] = useState()

  useEffect(() =>{
    AxiosWithAuth()
      .get('players')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('error:', err)
      })
  }, [])

  return (
    <div>
        <Link to='/' className=''> <h2>Back</h2> </Link>
        Dashboard
    </div>
  )
}
