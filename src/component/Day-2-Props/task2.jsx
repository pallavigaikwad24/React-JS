import {useState} from 'react';

let  MyComponent = (props)=>{
    return(
        <>
        <h2>Counter Example Using Props</h2>
        <h3>{props.state}</h3>
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
        <>
        <h3>Counter task using Props: </h3>
        <MyComponent Counter = {Counter} state ={state}/>
        </>
    )
}

export default MyComponet2;