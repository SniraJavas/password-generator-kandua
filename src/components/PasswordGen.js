import React from 'react';
import Checklist from './CheckList';
import SliderInput from './SliderInput';
const PasswordGen = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
            <div className='bg-secondary'style={{padding: 5 + '%'}}>

                <div className='text-white'>Password generator app</div>
                <div className='password-display-container'>
                    <input type='text' placeholder='Password will display here i.e P4$5W0rD!' />
                </div>
                <div className='bg-secondary'>
                    <SliderInput />
                    <Checklist />
                </div>
            </div>
        </div>
    );
};

export default PasswordGen;