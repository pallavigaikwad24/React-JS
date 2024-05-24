import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Topics() {

    const [one, setOne] = useState();
    const navigate = useNavigate();

    useEffect(()=>{

        if(one === undefined){
            return;
        }else if(one === "lifecycle"){
            navigate('/week-one/lifecycle');
        }else if(one === "props"){
            navigate('/week-one/props-task');
        }else if(one === "state"){
            navigate('/week-one/state-task');
        }else if(one === "task"){
            navigate('/week-one/tasks');
        }else if(one === "useeffect"){
            navigate('/week-one/useeffect');
        }else if(one === "useeffect-task"){
            navigate('/week-two/useeffect-task');
        }else if(one === "events"){
            navigate('/week-two/events');
        }else if(one === "input-types"){
            navigate('/week-two/input-types');
        }else if(one === "list-keys"){
            navigate('/week-two/list-keys');
        }else if(one === "cards"){
            navigate('/week-two/cards');
        }else if(one === "todo"){
            navigate('/week-three/todo');
        }else if(one === "form"){
            navigate('/week-three/form');
        }else if(one === "hooks"){
            navigate('/week-four/hooks');
        }else if(one === "camera"){
            navigate('/week-four/camera');
        }else if(one === "axios"){
            navigate('/week-four/axios');
        }else if(one === "formik-yup"){
            navigate('/week-five/formik-yup');
        }else if(one === "memo"){
            navigate('/week-six/memo');
        }else if(one === "redux"){
            navigate('/week-six/redux');
        }else if(one === "materialui"){
            navigate('/week-six/materialui');
        }else if(one === "hoc"){
            navigate('/week-seven/hoc');
        }else if(one === "lazy"){
            navigate('/week-seven/lazy');
        }else if(one === "custom-hook"){
            navigate('/week-seven/custom-hook');
        }

    },[one, navigate])
    

  return (
    <>

        <div id='week-div'>

            {/* Week One */}
            <select name="week-one" id="week-one" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week One">Week One</option>
                <option value="lifecycle">Component Lifecycle</option>
                <option value="props">Props</option>
                <option value="state">State</option>
                <option value="task">Tasks on State and Props</option>
                <option value="useeffect">Counter Task on UseEffect</option>
            </select>

            {/* Week Two */}
            <select name="week-two" id="week-two" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Two">Week Two</option>
                <option value="useeffect-task">Tasks using UseEffect Hook</option>
                <option value="input-types">Input Types</option>
                <option value="events">Events</option>
                <option value="list-keys">Lists and Keys</option>
                <option value="cards">Task using Cards</option>
            </select>

            {/* Week three */}
            <select name="week-three" id="week-three" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Three">Week Three</option>
                <option value="todo">Advanced ToDo List</option>
                <option value="form">Form with operations</option>
            </select>

            {/* Week Four */}
            <select name="week-four" id="week-four" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Four">Week Four</option>
                <option value="hooks">Hooks</option>
                <option value="camera">Camera Task using useRef Hook</option>
                <option value="axios">Fetch API using Axios</option>
            </select>
            {/* Week Five */}
            <select name="week-five" id="week-five" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Five">Week Five</option>
                <option value="formik-yup">Advanced Library: Formik and Yup</option>
            </select>

            {/* Week Six */}
            <select name="week-six" id="week-six" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Six">Week Six</option>
                <option value="memo">React Memo</option>
                <option value="redux">Redux</option>
                <option value="materialui">Material UI</option>
            </select>

            {/* Week Seven */}
            <select name="week-seven" id="week-seven" className='week' onChange={(e)=> setOne(e.target.value)}>
                <option value="Week Seven">Week Seven</option>
                <option value="hoc">Higher Order Component</option>
                <option value="lazy">Lazy Loading</option>
                <option value="custom-hook">Custome Hook</option>
            </select>
        </div>
    
    </>
  )
}

export default Topics;