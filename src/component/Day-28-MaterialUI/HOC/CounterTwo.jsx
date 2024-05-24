import React from 'react';
import HigherComp from './HigherComp';

function CounterTwo({counter, increment}) {
  return (
    <>
        <h3>{counter}</h3>
        <button onMouseOver={increment} style={{padding:"7px"}}>Count with Hover</button>
    </>
  )
}

export default HigherComp(CounterTwo, 10);