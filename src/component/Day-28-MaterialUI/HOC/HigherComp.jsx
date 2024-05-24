import React, { useState } from 'react';

function HigherComp(ArgComponent, incrementby=1) {
    return function EnhancedComp(props){
        const [counter, setCounter] = useState(0);
        
        return (
            <ArgComponent {...props} counter={counter} increment={()=>setCounter(counter + incrementby)}/>
          )
    }
  
}

export default HigherComp;