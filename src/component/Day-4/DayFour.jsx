import React from 'react';
import TaskOne from './Task-1 DefaultImg/DefaultImg.jsx';
import TaskTwo from './Task-3-Counter/Counter.jsx';
import TaskThree from './Task-4-NestingChild/NestingChild.jsx';
import TaskFour from './Task-5-MergeArray/MergeArray.jsx';
import TaskFive from './Task-6-AddArrayEle/AddArray.jsx';

function DayFour() {
  return (
    <>
    <div style={{textAlign:"center", lineHeight:"40px"}}>
        <h3 style={{color:"purple"}}>Task One: Set Default Iamge When Image link is broke</h3>
        <TaskOne/>
        <h3 style={{color:"purple"}}>Task Two: Increasing and Descresing Counter</h3>
        <TaskTwo/>
        <h3 style={{color:"purple"}}>Task Three: Prop Drilling</h3>
        <TaskThree/>
        <h3 style={{color:"purple"}}>Task Four: Merge Array using Spread Operator</h3>
        <TaskFour/>
        <h3 style={{color:"purple"}}>Task Five: Adding new Element in array Using Spread Operator</h3>
        <TaskFive/>
    </div>
    </>
  )
}

export default DayFour