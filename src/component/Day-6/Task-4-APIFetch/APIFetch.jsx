import { useState, useEffect } from "react";

function Information(){

    let [info, setInfo] = useState([]);
    let [id, setId] = useState(0);

    useEffect(()=>{
        console.log("inside effect");
        fetch( `https://freetestapi.com/api/v1/students/${id}`)
        .then(response => response.json())
        .then(data=> setInfo(data))
        .catch(err => {console.log(`data is not found please enter correct id`)})
        console.log(id);
    }, [id,info]);
    
    return(
        <>
        <input type="number" id="inputVal" onChange={(e)=> setId(e.target.value)} placeholder="Enter Id" style={{padding:"7px"}}/>

          <table border={1} style={{margin:"20px auto"}}>
            <thead>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </thead>
            <tbody>
            <tr>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.age}</td>
            <td>{info.gender}</td>
            </tr>
            </tbody>
          </table>
        </>
    )
}

export default Information;