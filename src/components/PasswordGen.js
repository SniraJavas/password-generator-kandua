import React, { useState } from 'react';
import Checklist from './CheckList';
import SliderInput from './SliderInput';

const PasswordGen = () => {
    const [password, setPassword] = useState("Password .....");
    const [passwordLen, setPasswordLen] = useState(15);
    const passwordMax = 30;

    const handlePasswordLenChange = (len) => {
        setPasswordLen(len);
    };

    const handlePasswordGenerated = (generatedPassword) => {
        setPassword(generatedPassword);
    };

    return (
        <div className="bg-dark container m-5">
            <div className='p-5'>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="text-secondary p-4">
                            <b><em>Password Generator</em></b>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-4">
                        <div className="bg-secondary text-white p-4" style={{display:'flex'}}>
                            <div className='col text-start'>{password}</div>
                            <div className='col text-end' onClick={() => navigator.clipboard.writeText(password)} style={{ cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9ef9b5" className="bi bi-copy" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="bg-secondary  text-white p-4">
                            <SliderInput passwordLen={passwordLen} passwordMax={passwordMax} onChange={handlePasswordLenChange} />
                            <Checklist passwordLen={passwordLen} onPasswordGenerated={handlePasswordGenerated} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordGen;
