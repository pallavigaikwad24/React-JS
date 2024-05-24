import { useState,useEffect } from "react";
import './taskThree.css';

function Card({state}){

    const [arr, setArr] = useState(state);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');    
    const [male, setMale] = useState('');
    const [female, setFemale] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');

    const reduce = arr?.reduce((acc,val)=>{
        return acc > val.salary ? acc : val.salary; 
    },0)
   
    const data = arr?.map((val, index)=>{

        return <div id="card"className="card bg-success bg-gradient text-white" style={{"width": "18rem", border:"1px solid black", padding:"10px"}} key={index}>
                <div className="card-body">
                    <p>{val?.salary === reduce && <h5 style={{"backgroundColor":"green", "textAlign":"center", "padding":"2px"}}>Highest Salary</h5>}</p>
                    <h5 className="card-title">{val?.name}</h5>
                    <p className="card-text">Age: {val?.age}</p>
                    <p className="card-text">Education: {val?.education}</p>
                    <p className="card-text">Weight: {val?.weight}</p>
                    <p className="card-text">Gender: {val?.gender}</p>
                    <p className="card-text">City: {val?.city}</p>
                    <p className="card-text">Salary: ${val?.salary}</p>
                    <p>{val.age > 35 ? <h5 style={{color:"red"}}>Not Applicable for job</h5> : <h5 style={{color:"green"}}>Applicable for job</h5>}</p>
                </div>
                </div>
    })
 
    useEffect(()=>{
        let result = state?.filter((val)=>{
            if(name !== ''){
                return val?.name.toLowerCase().includes(name);
            }else{
                return true;
            }
        })?.filter((val)=>{
            if(city !== ''){
                return val?.city.toLowerCase().includes(city);;
            }else{
                return true;
            }
        })?.filter((val)=>{
            if(male !== ''){
                return val?.gender === male;
            }else{
                return true;
            }
        })?.filter((val)=>{
            if(female !== ''){
                return val?.gender === female;
            }else{
                return true;
            }
        })?.filter((val)=>{
            if(age !== ''){

                if(age === "11-18"){
                    return val?.age>=11 && val?.age<=18;
                }else if(age === "19-30"){
                    return val?.age>=19 && val?.age<=30;
                }else if(age === "31-50"){
                    return val?.age>=31 && val?.age<=50;
                }else if(age === "51-70"){
                    return val?.age>=51 && val?.age<=70;
                }else{
                    return val?.age>=71 && val?.age<=85;
                }

            }else{
                return true;
            }
        })?.filter((val)=>{
            if(education !== ''){
                return val?.education === education;
            }else{
                return true;
            }
        })

        setArr(result);

    },[state,name,city,male,female,age,education])

    
    return(
        <>
        <div id="filter" className="filter-div">
            <button onClick={()=> setArr(state)} className="bg-info">See All Data</button> <br />
           <label htmlFor="nameInput">Name: </label>
           <input type="text" className="form-control" id="nameInput" placeholder="Enter your name..." onChange={(e)=>setName(e.target.value.toLowerCase())}/> <br />
           <label htmlFor="cityInput">City: </label>
           <input type="text" className="form-control" id="cityInput" placeholder="Enter city name..." onChange={(e)=>setCity(e.target.value.toLowerCase())}/>
            <div id="radiobtn">
                <label htmlFor="male">Male:</label>&nbsp;
                <input type="radio" className="form-check-input" id="male" value={"Male"} name="gender" onChange={(e)=>setMale(e.target.value)}/> &nbsp;
                <label htmlFor="female">Female:</label>&nbsp;
                <input type="radio" className="form-check-input" id="female" value={"Female"} name="gender" onChange={(e)=>setFemale(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="age">Select Age: </label>
            <select name="age" id="age" onChange={(e)=>setAge(e.target.value)}>
                <option value="select">Select</option>
                <option value="11-18">11-18</option>
                <option value="19-30">19-30</option>
                <option value="31-50">31-50</option>
                <option value="51-70">51-70</option>
                <option value="71-85">71-85</option>
             </select>
            </div>
            {/* Education */}
            <div>
            <label htmlFor="edu">Select Education: </label>
            <select name="edu" id="edu" onChange={(e)=>setEducation(e.target.value)}>
                <option value="select">Select</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="High School Diploma">High School Diploma</option>
             </select>
            </div>
        </div>
        {data}
        </>
    )
}

export default Card;