import { useState } from "react"

function NestedObj(){


    const [obj, setObj] = useState([{
        name:"Nell Bryant",
        address:"1163 Ikma Ridge",
        age:45,
        contact: {
            mobile: 8239259251,
            email:"nusnarzip@oco.cg",
        }
    },
    {
        name:"Brent Robertson",
        address:"556 Oviovo Manor",
        age:50,
        contact: {
            mobile: 9876543210,
            email:"jarunwob@mawtab.kp",
        }
    }])


    const result = obj.map((val, index)=>{
        return <tr key={index}>
            <td>Name: {val.name}</td>
            <td>Mobile No.:{val.contact.mobile}</td>
        </tr>
    })


    return(
        <>
      <table>
        <thead>
            <tr>
                <th>Name:</th>
                <th>Mobile No:</th>
            </tr>
        </thead>

        <tbody>
            {result}
        </tbody>
      </table>
        </>
    )
}

export default NestedObj;