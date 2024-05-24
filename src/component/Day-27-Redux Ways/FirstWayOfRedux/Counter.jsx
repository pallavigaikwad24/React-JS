import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './action';

// get state using useSelector

function Counter() {
    const myState = useSelector((state => state.counterChange));
    const dispatch = useDispatch();
  return (
    <>
    <div style={{textAlign:"center", lineHeight:"40px"}}>
        <h3>Counter</h3>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <h4>{myState}</h4>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </>
  )
}

export default Counter;