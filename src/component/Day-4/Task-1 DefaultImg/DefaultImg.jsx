import { useState } from "react"

function DefaultImg(){
    let [image, setImage] = useState("https://images.unsplash.com/photo-1617500756598-a0ee57567ac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhbmRhfGVufDB8fDB8fHwy");

    function defaultImg(){
        setImage("https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    }
    return(
        <div>
        <img src={image} alt="Panda" eight={300} width={500} onError={defaultImg}/> <br /> <br />
        <button onClick={defaultImg} style={{'padding':'10px'}}>Change to Default Image</button>
        </div>
    )
}

export default DefaultImg;