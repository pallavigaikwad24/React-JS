import React, { createContext, useState } from 'react'

import Login from './Login'
import './styleContext.css'

export const LoginCotext = createContext();

function Home() {

    const [login, setLogin] = useState(true);

    function toggle(){
        setLogin(!login);
    }
  return (
    <>
    <LoginCotext.Provider value={{login, toggle}}>
      <Login/>
    </LoginCotext.Provider>
    </>
  )
}

export default Home;
