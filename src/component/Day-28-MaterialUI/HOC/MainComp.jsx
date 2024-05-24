import React from 'react';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

function MainComp() {
  return (
    <>
    <div style={{margin:"100px", textAlign:"center"}}>
        <CounterOne/> <br /> <br /> <br /> <br />
        <CounterTwo/>
    </div>
    </>
  )
}

export default MainComp