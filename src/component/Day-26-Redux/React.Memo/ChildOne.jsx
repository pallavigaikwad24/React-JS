import React from 'react'

function ChildOne({todo, todoCounter}) {
    console.log("Child component render");
    return(
        <>
        <h4>TODO List</h4>
        <ul>
            {todo.map((item, index)=>{
                return <li key={index}>{item + index}</li>
            })}
        </ul>

        <button id='todo-btn' onClick={todoCounter}>Add TODO</button>
       
        </>
    )
}

export default React.memo(ChildOne);