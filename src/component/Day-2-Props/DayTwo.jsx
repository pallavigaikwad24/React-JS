import React from 'react';
import TaskOne from './task1.jsx';
import TaskTwo from './task2.jsx';
// import Home from '../Day-20-21-Routing/Home.jsx';

function DayTwo() {
  return (
    <>
    {/* <Home/> */}
    <div style={{textAlign:"center", lineHeight:"40px"}}>
      <h3 style={{color:"purple"}}>Task One</h3>
        <TaskOne/>
      <h3 style={{color:"purple"}}>Task Two</h3>
        <TaskTwo/>
    </div>
    </>
  )
}

export default DayTwo