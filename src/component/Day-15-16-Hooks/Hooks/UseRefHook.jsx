import React, { useEffect, useRef, useState } from 'react'
import './styleHook.css'


// It can be used to store a mutable value that does not cause a re-render when updated
 function UseRefHook() {

    const [count, setCount] = useState(0)

    // Without using useRef();
    // let value = 0;

    const value = useRef(0);

    const btnRef = useRef();

    useEffect(()=>{
        // value = value + 1;

        value.current = value.current + 1;
        console.log(`Value is after rendering: ${value.current}`);

        // Changing color direct using DOM element
        btnRef.current.style.backgroundColor = "red";
        btnRef.current.style.color = "white";
    },)

    return (
        <>
        <div id='mainRef'>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count + 1)} ref={btnRef}>Count</button>
            <h5>Value after count: {value.current}</h5>
        </div>
        </>
    )
}

export default UseRefHook;




