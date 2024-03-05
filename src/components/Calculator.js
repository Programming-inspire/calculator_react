import React, { useState } from 'react';
import Button from './Button';
import '../App.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>/</Button> {/* Ensure to pass the operator as a string */}
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>*</Button> {/* Ensure to pass the operator as a string */}
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>+</Button> {/* Ensure to pass the operator as a string */}
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick}>-</Button> {/* Ensure to pass the operator as a string */}
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleCalculate}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
