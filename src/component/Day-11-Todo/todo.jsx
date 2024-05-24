import { useState } from "react";
import './style.css'

function TODOList(){

    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [complete, setComplete] = useState([]);

    function todoTask(e){
        const result = task.trim();
        if(result){
            setTodoList([...todoList, task])
        }
        setTask('');
    }

    // transfer selected task to completed list
    function completeTask(index){

        let updatedData = [...todoList];
        setComplete([...complete, updatedData[index]]);
        updatedData.splice(index,1);

        setTodoList(updatedData);
    }

    // transfer selected task into original task list
    function undoFunction(index){
    
        let updatedData = [...complete];
        setTodoList([...todoList, updatedData[index]]);
        updatedData.splice(index,1);

        setComplete(updatedData);
    }
    
    // Filter task as per high and low priority
    function  filterval(e,index) {

        let selectedVal = todoList.filter((val)=> val === todoList[index]);
        let updatedList = todoList.filter((val)=> val !== todoList[index]);

        
        if(e.target.value === "High"){
            setTodoList([...selectedVal, ...updatedList]);
            e.target.value = "select";

        }else if(e.target.value === "Low"){
            setTodoList([ ...updatedList, ...selectedVal]);
            e.target.value = "select";
        }
        
    }

    return(
        <>
        <div id="main">
        <div id="todo">
        <div id="task">
        <input type="text" className="form-control" placeholder="TODO" value={task} onInput={(e)=>setTask(e.target.value)}/> 
        <button onClick={todoTask} className="btn">Add Task</button>
        </div>
            <ul className=" ">
                {todoList.length === 0 ? <img src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" width={200} height={200} alt="not data"/> : todoList.map((val,index)=>{
                    return <li key={index}>
                        <span className="fs-5">{val}</span> 
                        <button onClick={()=>completeTask(index)} className="btn">Completed</button>
                        <select onClick={(e)=> filterval(e,index)} id="options">
                            <option value="select">Select</option>
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                        </select>
                        </li>
                })}
            </ul>
        </div>

        <div id="complete" className="text-warning">
            <h3 id="completed">Completed</h3>
            <ul>
                {complete.length === 0 ?  <img src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" width={200} height={200} alt="not data"/> : complete.map((val, index)=>{
                    return <li key={index}><span className="  fs-5">{val}</span> <button onClick={()=>undoFunction(index)}  className="btn">Undo</button></li>
                })}  
                
            </ul>
        </div>
        </div>
        </>
    )
}

export default TODOList;