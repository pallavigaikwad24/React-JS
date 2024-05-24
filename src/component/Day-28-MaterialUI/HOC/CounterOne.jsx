import React from 'react';
import HigherComp from './HigherComp';

function CounterOne({counter, increment}) {
  return (
    <>
        <h3>{counter}</h3>
        <button onClick={increment} style={{padding:"7px"}}>Counter with CLick</button>
    </>
  )
}

export default HigherComp(CounterOne, 5);