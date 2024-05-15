import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const Checklist = (props) => {

  
    const [length, setLength] = useState(props.passwordLen);
    const [includeCapitalLetters, setIncludeCapitalLetters] = useState(false);
    const [includeLowerLetters, setIncludeLowerLetters] = useState(false);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

   useEffect(() => {
        setLength(props.passwordLen);
    }, [props.passwordLen]);
    
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
    
        const regex = new RegExp(`[${charset}]`, 'g');
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
                    <Form.Check id="UpperCase" type="checkbox" label="Include Uppercase Letters" onChange={() => setIncludeCapitalLetters(!includeCapitalLetters)}  />
                    <Form.Check id="LowerCase" type="checkbox" label="Include Lowercase Letters" onChange={() => setIncludeLowerLetters(!includeLowerLetters)} />
                    <Form.Check id="Numbsers" type="checkbox" label="Include Numbers" onChange={() => setIncludeNumbers(!includeNumbers)} />
                    <Form.Check id="Symbols" type="checkbox" label="Include Symbols" onChange={() => setIncludeSpecialSymbols(!includeSpecialSymbols)}/>
                </Form.Group>
            </Form>

            <div>
                Strength
            </div>
            <input type="button" onClick={generatePassword} value=" GENERATE " />
        </div>
    );
};

export default Checklist;