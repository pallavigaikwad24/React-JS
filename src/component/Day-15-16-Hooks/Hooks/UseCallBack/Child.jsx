import { memo } from "react";

function Child({todoCounter, todo}){
    console.log("Child component render");
    return(
        <>
        <h4>TODO List</h4>
        <ul>
            {todo.map((item, index)=>{
                return <li key={index} style={{marginLeft:"610px"}}>{item + index}</li>
            })}
        </ul>

        <button onClick={todoCounter}>Add TODO</button>
       
        </>
    )
}
export default memo(Child);