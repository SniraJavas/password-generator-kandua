import React from 'react';
import '../style/slider.css';
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
            <div className='col text-end' style={{color:"#9ef9b5",fontSize:25}}>{passwordLen}</div>
          </div>
            <input
                type="range"
                min="4"
                max={passwordMax}
                value={passwordLen}
                className='slider'
                onChange={handleSliderChange}
            ></input>
        </div>
    );
};

export default SliderInput;
