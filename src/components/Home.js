import logo from '../assets/logo.svg';
import React, { useState } from 'react';

const Home = () => {
    const [redirect, setRedirect] = useState(false);

    
    const redirectToPassGen = () => {
        setRedirect(true);
    };

    if (redirect) {
        window.location.href = "/PasswordGen";
        console.log({redirect});
        return null;
      }

    return (
        <div>
            <div className='container d-flex justify-content-center align-items-center vh-100 bg-dark'>
                <div className=''>
                    <h1 className="text-white">Welcome to the Password Generator</h1>
                    <img src={logo} alt="React logo" />
                    <p className='text-white'>Click the following button to get started</p>
                    <div className='"col text-center"'>
                    <button className="btn btn-info" onClick={redirectToPassGen}>Start</button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;