import React from 'react';
import TaskOne from './CallbackFunc/ChildToParent.jsx';
import TaskTwo from './ChildrenData/Demo.jsx';
import TaskThree from './usestate/AddCount/AddCount.jsx';
import TaskFour from './usestate/SpreadOperator/Spread.jsx';

function DayThree() {
  return (
    <>
    <div style={{textAlign:"center", lineHeight:"40px"}}>
        <h3 style={{color:"purple"}}>Task One: CallBack function Sending Child Data to Parent</h3>
        <TaskOne/>
        <h3 style={{color:"purple"}}>Task Two: Fetching Children Data</h3>
        <TaskTwo/>
        <h3 style={{color:"purple"}}>Task Three: Input value Addition</h3>
        <TaskThree/>
        <h3 style={{color:"purple"}}>Task Four: Spread Operator</h3>
        <TaskFour/>
    </div>
    </>
  )
}

export default DayThree;