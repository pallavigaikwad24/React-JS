import React from 'react'

function Error(props) {

  return (
    <>
      <p id='error' className={props.class}>{props?.error}</p>
    </>
  )
}

export default Error;