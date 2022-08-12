import React, { useState } from 'react';
import './calculator.css';

export default function Calculator() {
  return (
    <div className="container">
      <div className="display">
        <span>0</span>
      </div>
      <div className="operators">
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>

        <button>DEL</button>
      </div>
      <div className="digits">
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}
