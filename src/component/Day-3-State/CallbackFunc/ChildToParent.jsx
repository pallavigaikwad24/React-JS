// Callback function to get Child data using Parent function

const Parent= ()=>{
    function getData(data){
        console.log("Data:", data);
    }

    return(
        <>
        <Child getData={getData}/>
        </>
    )
}

const Child = ({getData})=>{
    let childData ="Hi, This is Child Component!";
    return(
        <>
           <h3>Child Component!</h3>
           <button onClick={()=>getData(childData)}>Click Here!</button>
        </>
    )
}

export default Parent;