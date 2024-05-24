import {useState, useEffect} from 'react';
function LocalStorageDemo(){

    let [state, setState] = useState('');
    // let [remove, setRemove] = useState('');
   
    useEffect(()=>{
        localStorage.setItem('name',"Pallavi");
        let val = localStorage.getItem('name');
        setState(val);
    
        return()=>{
            setTimeout(()=>{
                localStorage.removeItem("name");
            }, 5000);
            console.log("Remove items from localStorage");
        };
    }, [state]);

   
    return(
        <>
        <h3>{state}</h3>
        </>
    )
}

export default LocalStorageDemo;