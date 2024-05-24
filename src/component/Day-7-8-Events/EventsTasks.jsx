import React from 'react';
import { CopyEvent, DoubleClick, FocusEvent, InputEvent, KeyEvent, MouseEvent, OnClickEvent, ResizeEvent, Scroll, SubmitEvent, WindowTab } from './Task-1-Events/impEvents'

function EventsTasks() {
  return (
    <>
    <div style={{textAlign:"center", lineHeight:"40px"}}>
        <WindowTab/>
        <SubmitEvent/>
        <ResizeEvent/>
        <Scroll/>
        <InputEvent/>
        <FocusEvent/>
        <KeyEvent/>
        <CopyEvent/>
        <MouseEvent/>
        <DoubleClick/>
        <OnClickEvent/>
    </div>
    </>
  )
}

export default EventsTasks