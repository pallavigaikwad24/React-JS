import React, { useContext } from 'react';
import { ContextComponent } from '../../App';


function WeekTopics() {

    const {setShow} = useContext(ContextComponent);

    const Div_Style = {
        width:"20%", 
        height:"40vh", 
        border:"1px solid #D6AD60", 
        marginLeft:"60px", 
        marginTop:"5px", 
        backgroundColor:"#E4E69B",
        
    }
  return (
    <>
        <div style={Div_Style}>
            <ul style={{listStyle:"none",  lineHeight:"45px", textAlign:"center"}} onMouseLeave={()=>setShow("none")}>
                <li>Day 1. Component Lifecycle</li>
                <li>Day 2. Props</li>
                <li>Day 3. State</li>
                <li>Day 4. Task using Props and State</li>
                <li>Day 5</li>
            </ul>
        </div>
    </>
  )
}

export default WeekTopics;