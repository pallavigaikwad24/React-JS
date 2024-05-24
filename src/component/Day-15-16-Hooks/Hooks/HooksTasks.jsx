import React from 'react'
import { UseMemo } from './Hooks'
import { UseCallBack } from './UseCallBack/UseCallBack'
import UseRefHook from './UseRefHook';
import Home from './UseContext/Home.jsx';

function HooksTasks() {
  return (
    <>
        <div style={{textAlign:"center", lineHeight:"40px"}}>
            <h3 style={{color:"purple"}}>Task Using useMemo hook</h3>
            <UseMemo/>
            <h3 style={{color:"purple"}}>Task Using useCallback hook</h3>
            <UseCallBack/>
            <h3 style={{color:"purple"}}>Task Using UseRef hook</h3>
            <UseRefHook/>
            <h3 style={{color:"purple"}}>Task Using UseContext hook</h3>
            <Home/>

        </div>
    </>
  )
}

export default HooksTasks;