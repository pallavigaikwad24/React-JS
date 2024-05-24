import { useState } from "react";

function OptionalChaining(){

    const [state, setState] = useState(
    [
    {name:"Sam Stephens", country:"India",email:"bnup@ubjeb.sr"},
    {name:"Douglas Sutton", country:"Japan", email:"nenec@ubjeb.sr"},
    {name:"Devin Daniel", country:"Canada", email:"kable@ucabek.ma"},
    {name:"Justin Washington", country:"USA", email:"rivveov@uhna.bv"}
    ]
)

const obj = [
    {name:"abc", val:true},
    {name:"zys", val:false},
    {name:"rty", val:true},
]

 
const obj2 = {
    name:"abdgf",
    age:56,
    contact: {
      phoneNo: 234567890,
      email:"gasfd@gmail.com"
    }
  }

const data = state?.map((ele, index)=> <div key={index} style={{border:"1px solid black", width:"300px", margin:"10px auto"}}><p>{ele?.name}</p> <p>{ele?.country}</p> <p>{ele?.email}</p></div>)

    return(
        <>
        {/* Storing jsx into variable */}
        <h3 style={{color:"purple"}}>Storing JSX into Varible</h3>
        {data}
        
        {/* Conditional rendering: */}
        <h3 style={{color:"purple"}}>Conditional Rendering</h3>
        {obj.map((ele, index)=>{
            if(ele.val === true){
                return <div key={index}><p>{ele.name}</p></div>
            }
            return null;
        })}

        {/* Optional Chaining */}
        {console.log(obj2?.contact?.phoneNo)}     {/* if the error occure it display undefined  */}

        </>
    )
}

export default OptionalChaining;