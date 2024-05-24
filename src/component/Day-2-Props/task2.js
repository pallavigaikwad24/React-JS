import {useState} from 'react';

let  MyComponent = (props)=>{
    return(
        <>
        <h2>{props.state}</h2>
        <button onClick={props.Counter}>Click here!</button>
        </>
    )
}

let MyComponet2 = ()=>{
    let [state, seState] = useState(0);
    function Counter(){
        seState(state + 1);
    }
    return(
        <MyComponent Counter = {Counter} state ={state}/>
    )
}

export default MyComponet2;