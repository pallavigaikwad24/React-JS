import axios from "axios";
import { useEffect, useState } from "react";

function APIDemo(){

    const [state, setState] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=> {
            const posts = response.data;
            console.log(posts);
            setState(posts);
        })
        .catch((err)=> console.log("Error is occure while fetching data", err))
    })


    return(
        <>
        <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
            {state.map((item, index)=>{
                return <div key={index} style={{width:"500px", height:"200px", border: "1px solid black", margin:"50px auto", padding:"20px", lineHeight:"30px"}}>
                            <h2>User Id: {item.id}</h2>
                            <h3>Title: {item.title}</h3>
                            <p><u>Description:</u> {item.body}</p>
                       </div>
            })}
        </div>
        </>
    )
}
export default APIDemo;
