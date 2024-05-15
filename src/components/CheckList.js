import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const Checklist = (props) => {


    const [length, setLength] = useState(props.passwordLen);
    const [includeCapitalLetters, setIncludeCapitalLetters] = useState(false);
    const [includeLowerLetters, setIncludeLowerLetters] = useState(false);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [strength,setStrength] = useState('Weak');

    useEffect(() => {
        setLength(props.passwordLen);
    }, [props.passwordLen]);

    const calculateStrength = () => {
        const strength = includeCapitalLetters + includeLowerLetters + includeNumbers + includeSpecialSymbols;
        if (strength === 4) {
            return 'Best';
        } else if (strength === 3) {
            return 'Strong';
        } else if (strength === 2) {
            return 'Medium';
        } else {
            return 'Weak';
        }
    };

    const RenderProgressBar = () => {

        setStrength(calculateStrength());
        
        let color = '';
        if (strength === 'Best') {
            color = 'green';
        } else if (strength === 'Strong') {
            color = 'blue';
        } else if (strength === 'Medium') {
            color = 'yellow';
        } else {
            color = 'red';
        }

        return (
            <div style={{ backgroundColor: 'lightgray', width: '100%', height: '20px' }}>
                <div style={{ backgroundColor: color, width: `${strength === 'Best' ? 100 : (strength === 'Strong' ? 75 : (strength === 'Medium' ? 50 : 25))}%`, height: '100%' }}></div>
            </div>
        );
    };

    const generatePassword = () => {
        const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
        const specialSymbols = '!@#$%^&*()_+{}[]';
        const numbers = '0123456789';

        let charset = '';
        if (includeCapitalLetters) charset += capitalLetters;
        if (includeLowerLetters) charset += lowerLetters;
        if (includeSpecialSymbols) charset += specialSymbols;
        if (includeNumbers) charset += numbers;

        let password = '';

        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        setGeneratedPassword(password);
        props.onPasswordGenerated(generatedPassword);
    };

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Check id="UpperCase" type="checkbox" label="Include Uppercase Letters" onChange={() => setIncludeCapitalLetters(!includeCapitalLetters)} />
                    <Form.Check id="LowerCase" type="checkbox" label="Include Lowercase Letters" onChange={() => setIncludeLowerLetters(!includeLowerLetters)} />
                    <Form.Check id="Numbsers" type="checkbox" label="Include Numbers" onChange={() => setIncludeNumbers(!includeNumbers)} />
                    <Form.Check id="Symbols" type="checkbox" label="Include Symbols" onChange={() => setIncludeSpecialSymbols(!includeSpecialSymbols)} />
                </Form.Group>
            </Form>

            <div style={{display:'flex'}}>
                <div className='col text-start'>{strength}</div>
                <div className='pe-5'>{strength}</div>
                <div className="col text-end" >
                <RenderProgressBar />
                </div>

            </div>
            <input type="button" onClick={generatePassword} value=" GENERATE " />
        </div>
    );
};

export default Checklist;