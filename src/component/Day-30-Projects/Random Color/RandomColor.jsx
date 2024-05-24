import React, { useEffect, useState } from 'react'

function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomNummber(length){
        return Math.floor(Math.random() * length);
    }

    function handleRandomHexColor(){
        const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        let hexColor = "#";
        for(let i=0;i<6;i++){
            hexColor += hexValue[randomNummber(hexValue.length)];
        }

        setColor(hexColor);
    }

    function handleRandomeRGBColor(){
        const r = randomNummber(256);
        const b = randomNummber(256);
        const g = randomNummber(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if(typeOfColor === 'hex')
            handleRandomHexColor()
        else
            handleRandomeRGBColor();
    }, [typeOfColor])

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign:"center"
      }}>
        <button onClick={()=>typeOfColor === 'hex' ? handleRandomHexColor() : handleRandomeRGBColor()}>Randome Color</button>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>

    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}>

        <h2>{typeOfColor === 'hex' ? "Hex Value": "RGB Value"}</h2>
        <h1>{color}</h1>
</div>
    </div>
  )
}

export default RandomColor