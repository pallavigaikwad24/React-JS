import { useState } from "react"

function Counter(){

    let [count, setCount] = useState(0);

    function countInc(){
        setCount(count + 1);
        if(count === 10){
            setCount(0);
        }
    }

    function countDec(){
        setCount(count - 1);
        if(count === 0){
            setCount(10);
        }
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={countInc} style={{'padding':'10px', backgroundColor:"lightgray", marginRight:"10px"}}>Increase Count</button>
        <button onClick={countDec} style={{'padding':'10px'}}>Decrease Count</button>
        </>
    )
}

export default Counter;