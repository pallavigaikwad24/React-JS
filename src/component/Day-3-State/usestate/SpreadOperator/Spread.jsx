import { useState } from "react"

function SpreadDemo(){
   
    const [obj, setObj] = useState({name:"abc", age:24, skills:"React"});
    const [arr, setArr] = useState([1,2,3,4,5,6]);

    const [nestObj, setNestObj] = useState({
        personOne:{name:"wer", dept:"comp"},
        personTwo:{name:"dfg", dept:"Mech"}
    });
    
    let arrobj = {...arr};

    console.log(arrobj);

    function changeArr(){
    setObj({...obj, name:"xyz"});
    setNestObj({...nestObj, personOne:{...nestObj.personOne, name:"John"}})

    setArr(prev=>({
        ...prev, 0:24
    }))
    }
    return(
        <>
        {obj.name} <br />
        {arr[0]} <br />
        {nestObj.personOne.name}
        <br />
        <button onClick={changeArr}>Change array</button>
        <br />
        </>
    )
}

export default SpreadDemo;