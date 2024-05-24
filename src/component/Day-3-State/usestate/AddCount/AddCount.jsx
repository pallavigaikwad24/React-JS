import { useState } from "react"

function Count(){

    const [state, setState] = useState(0);
    return(
        <>
        <br />
        <CountAdd state={state} setState={setState}/>
        <br />
        </>
    )
}

function CountAdd(props){
    const [value, setValue] = useState("");
    function countAdd(){

        props.setState(Number(value) + props.state);
        setValue(" ");
    }
    return(
        <>
        <input type="number" id="inputNum" value={value} onChange={(e)=> setValue(e.target.value)}/> <br />
        <h2> {props.state} </h2> 
        <button onClick={countAdd} style={{'padding':'10px', }}>Click for Add</button>
        </>
    )

}

export default Count;