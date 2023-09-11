import React from 'react';
import Login from './Login';
import Signup from './Signup';

export default function PublicPage() {

    return (
        <div className="welcome">
            <div className="welcome-title">Welcome to Mega-Monopoly</div>
            <div className="flex">

                <div className="welcome-card">
                    <div className='inner-welcome-card'>
                        <div className='title-deed bg-red-600'>
                            <div className='flex'>
                                <p className="uppercase text-sm mr-3">T i t l e</p>
                                <p className="uppercase text-sm">D e e d</p>
                            </div>
                            <p className="uppercase text-[1.25rem]">About Mega-Monopoly</p>
                        </div>
                    </div>
                
                </div>
                <div className='flex mt-[-10rem]'>
                    <Login />
                    <Signup />
                </div>
            </div>
        </div>
    )
}
