import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
 
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state);

  const style = {
    padding:"5px",
    margin:"10px"
  }
  return (
    <>
    <div id="count-container" style={{marginTop:"50px", textAlign:"center"}}>
        <button onClick={(e)=> dispatch({type: 'INCREMENT'})} style={style}>INCREMENT</button>
            <p>{count}</p>
        <button onClick={(e)=> dispatch({type: 'DECREMENT'})} style={style}>DESCREMENT</button>
    </div>
    </>
  )
}

export default Counter