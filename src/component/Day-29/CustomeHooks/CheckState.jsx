import React, { useState } from 'react';
import useOnline from './useOnline';
import useCounter from './useCounter';


function CheckState() {
    const checkStatus = useOnline() ? "Online 🟢" : "Offline 🔴";
    const [state, increment, incrementOne] = useCounter();
  return (
    <>
    <div style={{textAlign:"center", lineHeight:"40px", marginTop:"30px"}}>
        <h2>The person is : {checkStatus}</h2>
        <input type="number" placeholder='Enter value' onChange={(e)=> incrementOne(Number(e.target.value))} />
        <h3>{state}</h3>
        <button onClick={()=>increment()}>Click here</button>
    </div>
    </>
  )
}

export default CheckState;