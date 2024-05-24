import React, { useState, useCallback } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import './memo.css'

function Parent() {

    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const counter= useCallback(()=>{
      setCount(count + 1);
    },[count]);

    const todoCounter = useCallback(()=>{
      setTodo((prev) => [...prev, `New Task `]);
    },[todo]);
  
  return (
    <>
    <div id="mainMemo">
      <ChildOne todoCounter={todoCounter} todo={todo} />
      <ChildTwo count={count} counter={counter}/>
    </div>
    </>
  )
}

export default Parent;