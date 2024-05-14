import React from 'react';

const SliderInput = (props) => {
    const { passwordLen, passwordMax, onChange } = props;

    const handleSliderChange = (event) => {
        const len = parseInt(event.target.value);
        onChange(len);
    };

    return (
        <div className='row'>
            <label>Character Length</label>
            <p>Value: {passwordLen}</p>
            <input
                type="range"
                min="4"
                max={passwordMax}
                className=''
                value={passwordLen}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default SliderInput;
