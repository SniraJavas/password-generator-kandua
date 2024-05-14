import React from 'react';

const SliderInput = (props) => {
    const { passwordLen, passwordMax, onChange } = props;

    const handleSliderChange = (event) => {
        const len = parseInt(event.target.value);
        onChange(len);
    };

    return (
        <div className='row'>
          <div style={{display:'flex'}}>
            <div className='col text-start'>Character Length</div>
            <div className='col text-end'>{passwordLen}</div>
          </div>
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
