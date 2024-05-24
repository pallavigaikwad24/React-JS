import React, { useContext } from 'react'
import { LoginCotext } from './Home'

function Button() {
    const value = useContext(LoginCotext);
  return (
    <>
      <button onClick={()=>value.toggle()}>{value.login ? 'Login' : 'Logout'}</button>
    </>
  )
}

export default Button;
