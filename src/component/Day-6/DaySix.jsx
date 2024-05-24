import React from 'react';
import TaskOne from './Task-1-SetTimeOut/setTimeOut.jsx';
import TaskTwo from './Task-2-SetInterval/SetInterval.jsx';
import TaskThree from './Task-3-localStorage/LocalStorage.jsx';
import TaskFour from './Task-4-APIFetch/APIFetch.jsx';
import TaskFive from './Task-5-cookies/Cookies.jsx';

function DaySix() {
  return (
    <>
        <div style={{textAlign:"center", lineHeight:"40px"}}>
            <h3 style={{color:"purple"}}>Task One: SetTimeOut using Useeffect Hook</h3>
            <TaskOne/>
            <h3 style={{color:"purple"}}>Task Two: SetInterval using Useeffect Hook</h3>
            <TaskTwo/>
            <h3 style={{color:"purple"}}>Task Three: Localstorage using Useeffect Hook</h3>
            <TaskThree/>
            <h3 style={{color:"purple"}}>Task Four: Fetching API using Useeffect Hook</h3>
            <TaskFour/>
            <h3 style={{color:"purple"}}>Task Five: Cookies using Useeffect Hook</h3>
            <TaskFive/>
        </div>
    </>
  )
}

export default DaySix