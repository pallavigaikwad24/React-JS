function ChildrenDemo() {
    const jsx = <>
                    <h2>Hi This is Demo Component</h2>
                    <p>This is paragraph under Demo</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                    <table border={1}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skill</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Jeremy Stanley</td>
                            <td>React Js</td>
                        </tr>
                        <tr>
                            <td>Eliza French</td>
                            <td>Node Js, PHP</td>
                        </tr>
                        </tbody>
                    </table>
                </>
    return ( 
        <>
        <Demo>{jsx}</Demo>
        </>
    )
}

function Demo({children}){
    return(
        <>
            {children}
        </>
    )
}

export default ChildrenDemo;