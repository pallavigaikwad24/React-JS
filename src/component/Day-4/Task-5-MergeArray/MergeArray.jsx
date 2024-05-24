import { useEffect, useState } from "react";

function MergeArray(){

    let arrOne = [1,2,3,4,5];
    let arrTwo = [6,7,8,9,0]

    let [combined, setCombined] = useState([])

    function mergeArr(){
        setCombined([...arrOne, ...arrTwo])
    }

    useEffect(()=>{
        console.log(combined);
    }, [combined])
    
    return(
        <>
        <h3>{arrOne.join(",")}</h3> 
        <h3>{arrTwo.join(",")}</h3> 
        <h3>Merged Array: {combined.join(",")}</h3>
        <button onClick={mergeArr} style={{'padding':'10px'}}>Click!</button>
        </>
    )
}

export default MergeArray;