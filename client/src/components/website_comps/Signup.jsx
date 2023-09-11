import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [confirm, setConfirm] = useState('');
    const [newUser, setNewUser] = useState(null)

    const navigate = useNavigate()

    const submitNewUser = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/auth/register', input)
            .then((res) => {
                console.log('RES', res.data)
                localStorage.setItem('token', res.data.token)
                if(res.status === 201) {
                    setNewUser(res.data.newPlayer)
                    navigate('/dashboard')
                } else {
                    navigate('/signup')
                }
                setInput({ username: '', email: '', password: '' });
                setConfirm('')
            })
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
          <div className='title-deed bg-blue-800'>
              <div className='flex'>
              <p className="uppercase text-sm mr-3">T i t l e</p>
              <p className="uppercase text-sm">D e e d</p>
              </div>
              <p className="uppercase text-[1.25rem]">Sign-Up</p>
          </div>
          <div className=" flex flex-col mx-4">
            <div className='mx-auto text-[1.35rem]'>Rent $50</div>
            <form onSubmit={submitNewUser} className="flex flex-col">
              <input 
                type="text"
                name='username'
                placeholder='Name'
                value={input.username}
                onChange={handleChange}
                className="inputs"
              />
              <input 
                type="email"
                name='email'
                placeholder='Email'
                value={input.email}
                onChange={handleChange}
                className="inputs"
              />
              <input 
                type="password"
                name='password'
                placeholder='Password'
                value={input.password}
                onChange={handleChange}
                className="inputs"
              />
              <input 
                type="password"
                name='confirm_password'
                placeholder='Confirm Password'
                value={confirm.confirm_password}
                onChange={(e) => setConfirm(e.target.value)}
                className="inputs"
              />

              {input.password === confirm ? null : <div>Your passwords dont match</div>}
              
              <button
                type="submit"
                className='inputs mt-2 p-2 w-[10rem] mx-auto'
              >
                Register
              </button>
            </form>
          <p className="text-[.85rem] text-justify mr-4 mt-3 leading-[1rem]">If a player owns ALL the lots of any color-group, the rent is doubled on unimproved lots in that group.</p>
          </div>
        </div>
        {newUser ? <div>Welcome to Mega-Monopoly {newUser.username}</div> : null}
      </div>
    </div>
  )
}