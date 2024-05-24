import React, { useCallback, useState } from 'react'
import Child from './Child.jsx';

export function UseCallBack() {

    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const counter=()=>{
      setCount(count + 1);
    };

    const todoCounter = useCallback(()=>{
      console.log('Callback');
      setTodo((prev) => [...prev, `New Task `]);
    },[todo]);
  
  return (
    <>
      <Child todoCounter={todoCounter} todo={todo} />
      <h5>{count}</h5>
      <button onClick={counter}>Count</button>
    </>
  )
}