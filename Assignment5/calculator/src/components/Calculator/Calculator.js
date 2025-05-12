import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operator) => {
    const a = Number(num1);
    const b = Number(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b === 0 ? 'Cannot divide by zero' : a / b);
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>−</button>
        <button onClick={() => handleOperation('*')}>×</button>
        <button onClick={() => handleOperation('/')}>÷</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default Calculator;
