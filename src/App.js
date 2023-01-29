import './App.css';
import Button from './components/Button.js'
import InputScreen from './components/InputScreen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Please enter the values to make the calculations")
    }
  };


  return (
    <div className='App'>

      <LogoFreeCodeCamp />

      <div className='container-calculator'>
        <InputScreen input={input} />
        <div className='file'>
          <Button managerClick={addInput}>1</Button>
          <Button managerClick={addInput}>2</Button>
          <Button managerClick={addInput}>3</Button>
          <Button managerClick={addInput}>+</Button>
        </div>

        <div className='file'>
          <Button managerClick={addInput}>4</Button>
          <Button managerClick={addInput}>5</Button>
          <Button managerClick={addInput}>6</Button>
          <Button managerClick={addInput}>-</Button>
        </div>

        <div className='file'>
          <Button managerClick={addInput}>7</Button>
          <Button managerClick={addInput}>8</Button>
          <Button managerClick={addInput}>9</Button>
          <Button managerClick={addInput}>*</Button>
        </div>

        <div className='file'>
          <Button managerClick={calculateResult}>=</Button>
          <Button managerClick={addInput}>0</Button>
          <Button managerClick={addInput}>.</Button>
          <Button managerClick={addInput}>/</Button>
        </div>

        <div className='file'>
          <ButtonClear managerClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
