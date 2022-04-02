import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  let navigate = useNavigate();

  useEffect(() => {
    
  })

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/auth/login', input)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
        setInput({ email: '', password: '' });
      })
      .catch(error => console.log("ERROR", error));
  }

  const handleChange = (e) => {
    const { name } = e.target
    e.preventDefault();
    setInput({
      ...input,
      [name]: e.target.value
    })
  }

  return (
    <div className="login-signup">
      <div className="welcome-card">
        <div className='inner-welcome-card'>
          <div className='title-deed bg-green-700'>
            <div className='flex'>
              <p className="uppercase text-sm mr-3">T i t l e</p>
              <p className="uppercase text-sm">D e e d</p>
            </div>
            <p className="uppercase text-[1.25rem]">Login</p>
          </div>
          <div className="flex flex-col mx-4">
            <div className='mx-auto text-[1.35rem]'>Rent $28</div>
            <form onSubmit={submitLogin} className="flex flex-col">
              <input 
                type="email"
                name='email'
                placeholder='Email'
                value={input.email}
                onChange={handleChange}
                className='inputs mt-2 p-2'
              />
              <input 
                type="password"
                name='password'
                placeholder='Password'
                value={input.password}
                onChange={handleChange}
                className='inputs mt-2 p-2'
              />

              <button
                type="submit"
                className='inputs p-2 mt-4 w-[10rem] mx-auto'
              >
                Login
              </button>
            </form>
            <p className="text-[.85rem] text-justify mr-4 mt-4 leading-[1rem]">If a player owns ALL the lots of any color-group, the rent is doubled on unimproved lots in that group.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
