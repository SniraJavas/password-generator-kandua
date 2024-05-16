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

    const ProgressBar = () => {

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

        let password = '';
        let index = 0;
        let i = 0;
        let charset = '';
        if (includeCapitalLetters){
            charset += capitalLetters;
            i = Math.floor(Math.random() * (capitalLetters.length));
            password+=capitalLetters[0];
            index+=1;
        } 
        if (includeLowerLetters){
            charset += lowerLetters;
            i = Math.floor(Math.random() * (lowerLetters.length));
            password+=lowerLetters[0];
            index+=1;
        }

        if (includeSpecialSymbols) {
            charset += specialSymbols;
            i = Math.floor(Math.random() * (specialSymbols.length));
            password+=specialSymbols[0];
            index+=1;
        }

        if (includeNumbers){
            charset += numbers;
            i = Math.floor(Math.random() * (numbers.length));
            password+=numbers[0];
            index+=1;
        }

        for (let j = index; j < length; j++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        password = password.split('').reverse().join('');
        setGeneratedPassword(password);
        props.onPasswordGenerated(password);
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
                <div className='col text-start'>Strength</div>
                <div className='pe-5'>{strength}</div>
                <div className="col text-end" >
                <ProgressBar />
                </div>

            </div>
            <input type="button" onClick={generatePassword} value=" GENERATE " />
        </div>
    );
};

export default Checklist;