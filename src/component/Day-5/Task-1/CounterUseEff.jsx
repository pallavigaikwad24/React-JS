import { useEffect, useState } from "react"

function CounterUseff(){

    let [count, setCount] = useState(0);
    console.log(count);
    
    function counterInc(){
        setCount(count + 1);
    }
    
    function counterDcr(){
        setCount(count - 1);
    }

    useEffect(()=>{
        if(count > 20){
            alert("Your count is greater than 20");
            setCount(20);
        }
        if(count < 0){
            alert("Your count is less than 0");
            setCount(0);
        }
    },[count]);

    return(
        <>
        <div style={{textAlign:"center", marginTop:"20px", lineHeight:"40px"}}>
        <h3>Counter Task using useEffect()</h3>
        <h2>{count}</h2>
        <button onClick={counterInc} style={{'backgroundColor':'purple', 'padding':'10px', 'color':'white', marginRight:"20px"}}>Increment</button>
        <button onClick={counterDcr}  style={{'backgroundColor':'purple', 'padding':'10px', 'color':'white'}}>Decrement</button>
        </div>
        </>
    )
}

export default CounterUseff;