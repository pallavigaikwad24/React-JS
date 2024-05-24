import React, { useState } from 'react'

function Form() {
    const [obj,setObj]=useState({
        male:false,
        female:false
    })

    const handlerSubmit=(e)=>{
        
        const {name,checked}=e.target;
        setObj({...obj,[name]:checked})
    }

    console.log(obj);
  return (
    <div>
    
        <form action="">
            <label htmlFor="male">Male</label>
            <input type="checkbox" id="male" name='male' onChange={handlerSubmit}/>  <br /><br />

            <label htmlFor="female">Female</label>
            <input type="checkbox" id="female" name="female" onChange={handlerSubmit}/>  <br /><br />
        </form>
      
    </div>
  )
}

export default Form;
