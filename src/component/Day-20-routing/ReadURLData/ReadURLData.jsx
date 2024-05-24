import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './style.css'


function ReadURLData() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/:nameId' element={<Dashboard/>}/>

            <Route path='*' element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>


    </>
  )
}

function HomePage(){
  const [name, setName] = useState('');

  function clickFun(){
    if(name.trim() !== ''){{
      window.location.href = `/${name}`;
    }}
  }


  return(
    <>
      <input type="text" id='name' placeholder='Enter your name..' onChange={(e)=> setName(e.target.value)}/>
      <button onClick={clickFun}>Submit</button>
    </>
  )
}

function Dashboard(){


    const {nameId} = useParams();
    return(
        <>
        <nav>
          <h3>Hi, This is {nameId}</h3>
        </nav>
        </>
    )
}

export default ReadURLData;