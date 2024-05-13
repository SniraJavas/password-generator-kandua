import React from 'react';
import Checklist from './CheckList';
import SliderInput from './SliderInput';
const PasswordGen = () => {
    return (
        <div>
            <head>
                <title>Password generator app</title>
            </head>
            <body>

                <div className='password-display-container'>
                    <textarea placeholder='Password will display here i.e P4$5W0rD!' />
                </div>
                <div className='password-settings-container'>
                    <SliderInput />
                    <Checklist />
                </div>

            </body>
        </div>
    );
};

export default PasswordGen;