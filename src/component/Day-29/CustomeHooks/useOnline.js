import React, { useEffect, useState } from 'react';

function useOnline() {
    const [state, setState] = useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=> setState(true));
        window.addEventListener("offline", ()=> setState(false));
    },[])

  return state;
}

export default useOnline;