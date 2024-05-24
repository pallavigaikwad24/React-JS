import { useState } from "react"
import './taskOne.css'

function RemoveDuplicate(){

    const [arr, setArr] = useState([22,12,39,83,30,28,24,28,53,42,12,28,94,68,65])
    const [result, setResult] = useState([]);

    function removeDuplicate(){
       const resultArr = arr.filter((value, index)=> arr.indexOf(value) === index);
        setResult(resultArr);
    }

    return(
        <>
        <div id="main">
            <h3>{arr.join(",")}</h3>
            <h4>Length: {arr.length}</h4>
            <button onClick={removeDuplicate}>Remove Duplicates!</button>
            <h3>{result.join(",")}</h3>
            <h4>Length after Removing duplicates: {result.length}</h4>
        </div>
        
        </>
    )
}

export default RemoveDuplicate;