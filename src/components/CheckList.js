import React,  { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Checklist = () => {

    const [value, setValue] = useState(20);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Form>
            <Form.Group>
                <Form.Check type="checkbox" label="Include Uppercase Letters" />
                <Form.Check type="checkbox" label="Include Lowercase Letters" />
                <Form.Check type="checkbox" label="Include Numbers" />
                <Form.Check type="checkbox" label="Include Symbols" />
            </Form.Group>
            </Form>

            <div>
            Strength
            </div>
            <button> Generate</button> 
        </div>
    );
};

export default Checklist;