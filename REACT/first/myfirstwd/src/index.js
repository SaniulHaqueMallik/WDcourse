import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "Saniul"
const lname = "Mallik"
const luckNum = 7
ReactDOM.render(
  <div> 
    <h1>Hello {fname} {lname} </h1>
    <p>Your lucky Number is {luckNum} </p>
  </div>,
  document.getElementById("root")
)
