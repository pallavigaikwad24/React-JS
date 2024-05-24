function Demo() {
    return ( 
        <>
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