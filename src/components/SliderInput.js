import React, { useState } from 'react';

const SliderInput = () => {
    const [value, setValue] = useState(30); // Initial value

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>Character Length</label>
            <p>Value: {value}</p>
            <input
                type="range"
                min="0"
                max="30"
                value={value}
                onChange={handleSliderChange}
            />
          
        </div>
    );
};

export default SliderInput;
