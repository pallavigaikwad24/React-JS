import React, { useState } from 'react'

function useCounter() {
    const [state, setState] = useState(0);
    const [one, setOne] = useState();

    function increment(){
        setState(state +  one);
    }

    function incrementOne(val){
      setOne(val)
    }

  return [state, increment, incrementOne];
}

export default useCounter;