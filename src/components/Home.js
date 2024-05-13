import logo from '../assets/logo.svg';
import React, { useState } from 'react';

const Home = () => {
    const [redirect, setRedirect] = useState(false);

    
    const redirectToPassGen = () => {
        setRedirect(true);
    };

    if (redirect) {
        window.location.href = "/passwordGen";
        return null;
      }

    return (
        <div>
            <h1>Welcome to the Password Generator</h1>
            <image src={logo}/>
            <p>Click the following button to get started</p>
            <button onClick={redirectToPassGen}>Start</button>
        </div>
    );
};

export default Home;