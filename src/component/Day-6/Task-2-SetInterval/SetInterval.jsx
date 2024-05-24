import { useEffect, useState } from "react"

function SetInterval(){

    let [time, setTime] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
    },[time])

    
    return(
        <>
        <h2>Digital Time</h2>
        <h3 id="time">{time} </h3>
        </>
    )
}

export default SetInterval;