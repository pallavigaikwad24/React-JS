import React from 'react'

function Input(props) {
  return (
    <>
        <label htmlFor={props?.labelFor} className='label'>{props?.labelName}: </label>
        <input type={props?.type} name={props?.name} id={props?.id} className={props?.class} value={props?.value} onChange={props.onChange} checked={props?.checked}/>
    </>
  )
}

export default Input