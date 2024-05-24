import { useState } from "react"

function Loops(){

    const [state, setState] = useState([{name:"Sam Stephens", country:"India", email:"se@zirmoali.ir", age:34},
                                        {name:"Douglas Sutton", country:"Japan", email:"nenec@ubjeb.sr", age:45},
                                        {name:"Devin Daniel", country:"Canada", email:"kable@ucabek.ma", age:46},
                                        {name:"Justin Washington", country:"USA", email:"rivveov@uhna.bv", age:38}]);

    function forLoopVal(){
        const forArr=[];
        for(let i=0;i<state.length;i++){
            forArr.push(<p>{state[i].name}</p>)
        }
        return forArr;
    }

    function whileLoopVal(){
        const whileArr = [];
        let i=0;
        while (i<state.length) {
            whileArr.push(<p>{state[i].country}</p>);
            i++;
        }
        return whileArr;
    }

    function doWhileLoop(){
        const doArr = [];
        let i=0;
        do {
            doArr.push(<p>{state[i].email}</p>)
        } while (i<state.length-1);

        return doArr;
    }

    function forIn(){
        const forInArr=[];
        for (const key in state) {
          forInArr.push(<p>{state[key]}</p>)
        }

        return forInArr;
    }

    function forOf(){
        const forOfArr = [];
        
         for(let val of state){
          forOfArr.push(<p>{val.name}</p>,<p>{val.country}</p>,<p>{val.age}</p>)
        }
        
        return forOfArr;
    }

    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])
    

    return(
        <>

        {/* ForEach Don't return anything because of this it don't show any values */}
        {state.forEach((val, index)=>{
            return <ul key={index}>
                <li>{val.name}</li>
                <li>{val.country}</li>
            </ul>
        })}

        <h3>Using Filter</h3>
        {state.filter((val)=>val.name === 'Akay').map((ele, index)=> <p key={index}>{ele.name}</p>)}

        <h3>Using Reduce: </h3>
        {arr.reduce((result, ele)=> result + ele, 0)}

        <h3>Using For Loop:</h3>
        <div>{forLoopVal()}</div>

        <h3>Using While Loop:</h3>
        <div>{whileLoopVal()}</div>

        <h3>Using Do While Loop:</h3>
        <div>{doWhileLoop()}</div>

        <h3>Using For In:</h3>
        <div>{forIn()}</div>

        <h3>Using For Of:</h3>
        <div>{forOf()}</div>

        </>
    )
}

export default Loops;