import { useEffect, useState } from "react"

// onClick(function) Event and onChange(function) Event
export function OnClickEvent(){

    let [task, setTask] = useState([]);
    let [inputVal, setInputVal] = useState('');

    function addTask(){
        if(inputVal !== ''){
            setTask([...task, inputVal]);
            setInputVal('');
        }
    }

    return(
        <>
        <h3>Example of onClick Events: </h3>
        <input type="text" id="inputVal" onChange={(e)=> setInputVal(e.target.value)} value= {inputVal} placeholder="Enter your task"/>
        <button onClick={addTask}>Add Task</button>

        <ul>
            {task.map((val, index)=>{
                return <li key={index}>{val}</li>
            })}
        </ul>
        </>
    )
}

// Double click event
export function DoubleClick(){
    let [msg, setMsg] = useState('');

    function clicked(){
        setMsg('You have click button Twice')
    }
    return(
        <>
        <h3>Example of Double Click Events: </h3>
        <button onDoubleClick={clicked} style={{"border":"1px solid black"}}>Click Here Twice!!</button>
        <p>{msg}</p>
        </>
    )
}

// Mouse Event 

export function MouseEvent(){

    let [color, setColor] = useState('');
    return(
        <>
        <h3>Example of Mouse Events: </h3>
        <input type="text" onChange={(e)=>setColor(e.target.value)}/>
        <h2 id="h2" 
        onMouseOver={(e)=>e.target.style.backgroundColor = color} 
        onMouseOut={(e)=>e.target.style.backgroundColor = 'white'}
        onMouseDown={(e)=>{e.target.style.textDecoration = 'line-through'}}
        onMouseUp={(e)=>e.target.style.textDecoration = 'none'}
        >
            Hello world this is Mouse event demo for mouseover
        </h2>

        <h1 style={{'color':'red'}}
        onMouseMove={(e)=>e.target.innerText = "This text after MouseMove Event"}>This text is before mouse move</h1>
        </>
    )
}

// copy paste Event

export function CopyEvent(){

    let [msg, setMsg] = useState('');

    return(
        <>
        <h3>Example of Copy Events: </h3>
        <h3 onCopy={()=>setMsg("Text Copied!")} >Ltorem, ipsum dolor si amet consectetur adipisicing elit. Voluptatibus excepturi minima laborum.</h3>
        <p>{msg}</p>
        <textarea onPaste={()=>setMsg("Paste event triggred")} cols={30} rows={10}></textarea>
        </>
    )
}

// Key Event

export function KeyEvent(){
    return(
        <>
        <h3>Example of Key Events: </h3>
        <button onKeyDown={(e)=>e.target.innerText = "You pressed key down"}
        onKeyUp={(e)=>e.target.innerText = "You pressed key up"}>Click here!</button>
        </>
    )
}

// Focus event

export function FocusEvent(){

    let [msg, setMsg] = useState('');

    return(
        <>
        <h3>Example of Focus and Blur Events: </h3>
        <p>{msg}</p>
        <input type="text" onFocus={(e)=>{e.target.style.outline='2px solid yellow'; setMsg("start typing")}}
        onBlur={(e)=>e.target.style.outline='none'}/>
        </>
    )
}

// input event

export function InputEvent(){
    let [text, setText] = useState('');
    return(
        <>
        <h3>Example of Input Events: </h3>
        <textarea name="text" cols="30" rows="10" 
        onInput={(e)=> setText(e.target.value)}
        placeholder="Write something!"></textarea>
        <p>{text}</p>
        </>
    )
}

// scroll event

export function Scroll(){

    let [msg, setMsg] = useState('');

    return(
        <>
        <h3>Example of Scoll Events: </h3>

        <h3>{msg}</h3>
        <div style={{"width":"300px", "height": "300px", "border":"1px solid black", "overflowY":"scroll", margin:"auto"}}
        onScroll={()=>setMsg('Scroll activated')}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repudiandae eius, impedit ea beatae eveniet repellendus et numquam voluptatibus eligendi veniam ab, illo excepturi. Rem impedit quos veniam ut nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aut accusamus autem minus laboriosam officiis facere cum doloremque. Quos et asperiores adipisci mollitia pariatur nulla, molestias quidem non eveniet porro! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque aspernatur odit magni commodi, expedita impedit fuga quasi esse quisquam nesciunt eaque eligendi exercitationem ullam deserunt blanditiis optio accusantium aut.</p>
        </div>
        </>
    )
}

// resize event

export function ResizeEvent(){
    let [msg, setMsg] = useState('');
    useEffect(()=>{
        function resizeMsg(){
            let width = window.outerWidth;
            let height = window.outerHeight;
    
            setMsg(`Width of the window : ${width}px and Height of the window : ${height}px`);
        }

        window.addEventListener("resize", resizeMsg);

        return()=>{
            window.removeEventListener("resize", resizeMsg);
        }
    },[])
  return(
        <>
        <h2>This is example of resize event</h2>
        <h4>{msg}</h4>
        </>
    )
}

// Submit event

export function SubmitEvent(){
    const [val, setVal] = useState({
                                  ReactJs:false,
                                  Javascript:false,
                                  NodeJs:false,
                                  Python:false,
                                  Java:false,
                                  PHP:false,
                                  Ruby:false
    })

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState([]);

    
    function showForm(e){
        e.preventDefault();
        let val = document.getElementById("completeForm");
        val.style.display = "block";
    }
    
    function checkedVal(e){
        const {name, checked} = e.target;
        setVal({...val, [name]:checked})

        if(e.target.checked === true){
            setState([...state, name]);
        }
    }
    
    return(
        <>
        <h3>Example of Submit Events: </h3>

        <form onSubmit={showForm}>
            <label htmlFor="name">Name: </label>
            <input type="text"  id="name" onChange={(e)=>setName(e.target.value)}/> 
            <br />
            <label htmlFor="gender">Select Gender: </label>
            <label htmlFor="male">Male:</label> 
            <input type="radio" value={"male"} name="gender" id="male" onChange={(e)=>setGender(e.target.value)}/> &nbsp;
            <label htmlFor="female">Female:</label>
            <input type="radio" value={"female"} name="gender" id="female" onChange={(e)=>setGender(e.target.value)}/>
            <br />
            <label htmlFor="country">Select Country: </label>

            <select name="country" id="country" onChange={(e)=>setCountry(e.target.value)}>
                <option value="Select">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Japan">Japan</option>
                <option value="England">England</option>
                <option value="South Korea">South Korea</option>
                <option value="Bali">Bali</option>
                <option value="China">China</option>
                <option value="Dubai">Dubai</option>
            </select>

            <br />

            <label htmlFor="skill">Skills: </label> <br />

            <label htmlFor="ReactJs">ReactJs: </label> 
            <input type="checkbox" name="ReactJs" id="ReactJs" onChange={checkedVal}/> <br />

            <label htmlFor="Javascript">Javascript: </label>
            <input type="checkbox" name="Javascript" id="Javascript" onChange={checkedVal}/> <br />
           
            <label>NodeJs: </label>
            <input type="checkbox" name="NodeJs" onChange={checkedVal}/> <br />

            <label>Python: </label>
            <input type="checkbox" name="Python" onChange={checkedVal}/> <br />

            <label>Java: </label>
            <input type="checkbox" name="Java" onChange={checkedVal}/> <br />

            <label>PHP: </label>
            <input type="checkbox" name="PHP" onChange={checkedVal}/> <br />

            <label>Ruby: </label>
            <input type="checkbox" name="Ruby" onChange={checkedVal}/> <br />

            <button type="submit" style={{"border":"1px solid black"}} onKeyDown={(e)=>{  if(e.key === "Enter"){showForm()}}}>Submit</button>
           
        </form>

        <div id="completeForm" style={{"display":"none"}}>
            <p><b>Name: </b>{name}</p>
            <p><b>Gender: </b>{gender}</p>
            <p><b>Country: </b>{country}</p>
            <p><b>Skills: </b>{state.join(",")}</p>
        </div>
        </>
    )
}


// Window tab blur focus
export function WindowTab(){
    const [state, setState] = useState('Window Example: ');

    useEffect(()=>{
        window.addEventListener("focus",()=>{
            document.title = "Focus Event"
            setState("Windows is now on Flocused mode");
        });

        window.addEventListener("blur",()=>{
            document.title = "Blur Event"
            setState("Window is Blurred");
        });

        return()=>{
            window.removeEventListener("focus",()=>{
              console.log("removed focused event");
            });
            window.removeEventListener("blur",()=>{
              console.log("removed blur event");
            });
        }
    })

    return(
        <>
        <h3>Example of WindowTab Events: </h3>

        <h3 style={{color:"purple"}}>{state}</h3>
        </>
    )
}

// load and unload

export function LoadUnload(){
    
    useEffect(()=>{
        window.addEventListener("load",()=>{
            console.log("Data loaded");
        });
        return()=>{
            window.removeEventListener("unload",()=>{
                console.log("load event removed");
            });

        }
    })

    return(
        <></>
    )
}