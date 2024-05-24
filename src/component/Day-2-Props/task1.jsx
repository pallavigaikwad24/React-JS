import PropTypes from 'prop-types'

let Componet1 = (props) => {
    return (
        <>
        <h2>Prop Types </h2>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <button onClick={props.displayName}>Click here!</button>
        </>
    )
}

let Componet2 = () => {
    function displayName(){
        console.log("This is a method");
    } 

    return(
        <><h3>Props and Props Types Task: </h3>
        <p>Open Console to see output..</p>
        <Componet1 name="abc" age={34} displayName={displayName}/>
        </>

    )
}

Componet1.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    displayName: PropTypes.func
}


export default Componet2;