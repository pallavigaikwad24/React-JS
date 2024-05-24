import { useEffect, useState } from "react"

function SetTimeOut(){

    let [color, setColor] = useState('');

    useEffect(()=>{
        let heading = document.getElementById("heading");
        setTimeout(()=>{
            setColor('pink');
            heading.style.backgroundColor = color;
        }, 5000)
        
    },[color])
    
    return(
        <>
        <h1 id="heading">Hello this is demo statement</h1>
        </>
    )
}

export default SetTimeOut;