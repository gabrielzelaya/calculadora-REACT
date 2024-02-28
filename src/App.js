import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      // Usamos la función eval para calcular la expresión matemática ingresada
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      // Si hay un error en la evaluación de la expresión, mostramos un mensaje de error
      setExpression('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-screen"
        value={expression}
        placeholder="0"
        readOnly
      />
      <div className="calculator-keys">
        <button onClick={clearExpression} className="key-clear">AC</button>
        <button onClick={() => handleButtonClick('/')}>&divide;</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;

