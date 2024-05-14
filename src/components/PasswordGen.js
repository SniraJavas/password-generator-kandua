import React, { useState } from 'react';
import Checklist from './CheckList';
import SliderInput from './SliderInput';

const PasswordGen = () => {
    const [password, setPassword] = useState(""); 
    const [passwordLen, setPasswordLen] = useState(15);
    const passwordMax = 30; 

    const handlePasswordLenChange = (len) => {
        setPasswordLen(len);
        console.log("parent password len changed{0 }",len);
    };

    const handlePasswordGenerated = (generatedPassword) => {
        setPassword(generatedPassword);
        console.log("parent password changed{0}",generatedPassword);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
            <div className='bg-secondary' style={{ padding: '5%' }}>
                <div className='text-white'>Password generator app</div>
                <div className='password-display-container'>
                    <input type='text' placeholder='Password will display here i.e P4$5W0rD!' value={password} readOnly />
                </div>
                <div className='bg-secondary'>
                    <SliderInput passwordLen={passwordLen} passwordMax={passwordMax} onChange={handlePasswordLenChange} />
                    <Checklist passwordLen={passwordLen} onPasswordGenerated={handlePasswordGenerated} />
                </div>
            </div>
        </div>
    );
};

export default PasswordGen;
