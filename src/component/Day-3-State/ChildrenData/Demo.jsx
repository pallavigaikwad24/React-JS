function Demo() {
    return ( 
        <>
        <h3>Accessing Children Data of Component: </h3>
        <br />
        <Child><h2>Hi, This is Children data of Child! In Demo Component</h2></Child>
        </>
    )
}

const Child = ({children})=>{
    return(
        <>
        {children}
        </>
    )
}

export default Demo;