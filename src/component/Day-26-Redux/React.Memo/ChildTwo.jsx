import React from 'react'

function ChildTwo({count, counter}) {
    console.log("Child Two for counter re-render");
  return (
    <>
      <h5>{count}</h5>
      <button id='count-btn' onClick={counter}>Count</button>
    </>
  )
}

export default React.memo(ChildTwo);