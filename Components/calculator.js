import React, { useState } from 'react';
import './calculator.css';

export default function Calculator() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
//
  const ops = ['/', '*', '+', '-', '.'];

  function updateCalc(value) {
    //Prevent adding symbols first or adding multiple symbols at a time or adding symbols at end
    if (
      (ops.includes(value) && calc == '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      console.log(value);
      setResult(eval(calc + value).toString());
    }
  }
  function calculate() {
    setCalc(eval(calc).toString());
  }
  function deleteLast() {
    if (calc === '') {
      return;
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
    }
  }
  function createDigits() {
    let digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          onClick={() => {
            updateCalc(i.toString());
          }}
        >
          {i}
        </button>
      );
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="display">
          {result ? <span>{result}</span> : ''}
          {calc || 0}
        </div>
        <div className="operators">
          <button
            onClick={() => {
              updateCalc('/');
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              updateCalc('*');
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              updateCalc('+');
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCalc('-');
            }}
          >
            -
          </button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button
            onClick={() => {
              updateCalc('0');
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              updateCalc('.');
            }}
          >
            .
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
