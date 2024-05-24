function InputComponent(){

    return(
        <>
        <div style={{"display":"flex", "justify":"space-around", "alignItems":"center", "flexFlow":"column"}}>
        <label htmlFor="textInpt">Text Input: </label>
        <input type="text" id="textInpt" onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="male">Male: </label>
        <input type="checkbox" id="male" onChange={(e)=>console.log(e.target.value)}/>

        <label htmlFor="female">Female: </label>
        <input type="checkbox" id="female"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="color">Color Input: </label>
        <input type="color" id="color"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="date">Date: </label>
        <input type="date" id="date"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="file">File: </label>
        <input type="file" id="file"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <div>
        <label htmlFor="radio">Radio Button: </label>
         Male: <input type="radio" name="radio"  onChange={(e)=>console.log(e.target.value)}/>
        Female: <input type="radio" name="radio"  onChange={(e)=>console.log(e.target.value)}/>
        </div>
        <br />
        <label htmlFor="range">Range: </label>
        <input type="range"  id="range"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="search">Search: </label>
        <input type="search" id="search"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="url">URL: </label>
        <input type="url" id="url"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <label htmlFor="time">Time: </label>
        <input type="time" id="time"  onChange={(e)=>console.log(e.target.value)}/>
        <br />
        <select onChange={(e)=>console.log(e.target.value)}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
        </select>
        </div>
        </>
    )
}

export default InputComponent;