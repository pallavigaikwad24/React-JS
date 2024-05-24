import { useState } from "react"

function Parent(){
    let [state, setState] = useState('ReactJs');

    function displayName(){
        setState("React Native");
    }
    return(
        <>
        <ChildOne state={state} displayName={displayName}/>
        </>
    )
}

function ChildOne({state, displayName}){
    return(
        <>
        <ChildTwo state={state} displayName={displayName}/>
        </>
    )
}

function ChildTwo({state, displayName}){
    return(
        <>
         <ChildThree state={state} displayName={displayName}/>
        </>
    )
}

function ChildThree({state, displayName}){
    return(
        <>
        <ChildFour state={state} displayName={displayName}/>
        </>
    )
}
function ChildFour({state, displayName}){
    return(
        <>
       <h2>{state}</h2>
       <button onClick={displayName} style={{ 'padding':'10px'}}>Click here!!</button>
        </>
    )
}
export default Parent;