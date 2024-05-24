import { useMemo, useState } from "react";


export function UseMemo(){
    const arr = new Array(30_000_000).fill(0).map((_,i)=>{
        return{
            index: i,
            isMagical: i===29_000_000
        }
    })

    const [number, setNumber] = useState(arr);
    const [count, setCount] = useState(0);

    // only render when number is changed
    const magicalNum = useMemo(()=>{
        console.log("This is memeo function");
        return number.find((item)=>item.isMagical === true)
    },[number])


    return(
        <>

            {console.log("Re-render")}
            <h4>The Magical Number is: {magicalNum.index}</h4>

            <h4>Count value: {count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Count</button>
        </>
    )
  
}

export function Factorial(){

    const [number, setNumber] = useState('');
    const [count, setCount] = useState(0);

    const factorial = useMemo(()=>{
        let fact = 1;
        if(number !== ''){
            
            for (let i = 1; i <= number; i++) {
               fact *= i;
            }
        }else{
            fact = '';
        }

        console.log("Factorial Memo function is execute..");
        return fact;
    }, [number])
    
    return(
        <>
            {console.log("Re-rendering")}
            <input type="number" placeholder="Enter number..." onChange={(e)=>setNumber(e.target.value)}/>
            <span>Factorial of number: </span>
            {factorial}

            <div>
                <h5>Count Value: {count}</h5>
                <button onClick={()=>setCount(count + 1)}>Count</button>
            </div>
        </>
    )
}




