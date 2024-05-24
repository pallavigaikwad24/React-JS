import { useEffect, useState } from "react"

function Cookies(){

    let [state, setState] = useState('');
    
    useEffect(()=>{
       
        document.cookie = "name=Pallavi; expires=Sun, 1 January 2050 12:00:00 UTC; path=/";
        setState(document.cookie);

        return()=>{
            console.log("Cookies are destroyed");
        }
    },[state]);

    return(
        <>
        <h2>Cookie Program using useEffect()</h2>
        <h3>{state}</h3>
        </>
    )
}

export default Cookies;