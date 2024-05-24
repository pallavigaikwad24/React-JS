import { useState } from "react"

function UseStateDemo(){
    let prev = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg";
    let next = "https://www.architectureartdesigns.com/wp-content/uploads/2013/04/tumblr_m7oynl386H1qa7gx5o1_500.jpg"

    const  [img, setImg] = useState(prev);
    const [jsx, setJsx] = useState(<p>This is para</p>)

    let name = "abc";
    function chnageImg(){
        if(next !== img){
            setImg(next);
        }else{
            setImg(prev);
        }
        setJsx(<p>Name: {name}</p>)
    }

    
    return(
        <>
            <img src={img} alt="" width={200} height={300} />
            <br />
            {jsx} 
            <br />
            <button onClick={chnageImg} style={{'backgroundColor':'black', 'width':'90px', 'height':'40px', 'color':'white'}}>Change Image</button>
        </>
    )
}

export default UseStateDemo;