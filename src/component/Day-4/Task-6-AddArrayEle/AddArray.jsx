import {useState} from 'react';

function AddArrayEle(){
    const [arr, setArr] = useState(['a','b','c','d','e','f']);

     function addEle(){
        let val = document.getElementById("inputVal");
        setArr([val.value, ...arr]);
        val.value="";
     }
    return(
        
        <div>
        <h2>{arr.join(",")}</h2>
        <input type="text" id='inputVal' style={{'padding':'7px', marginRight:"10px"}}/>
        <button onClick={addEle} style={{'padding':'7px'}}>Add</button>
        </div>
    )
}

export default AddArrayEle;