import { createContext, useState } from 'react';
import './App.css';
import Routing from './component/Day-20-21-Routing/routing.jsx';
export const ContextComponent = createContext();
import Login from './component/Day-31-GoogleLogin/Login.jsx';
import RoutingWay from './component/Day-22/RoutingWay.jsx';
import LoginWithGoogle from './component/Day-31-GoogleLogin/LoginWithGoogle.jsx';

function App() {
  const [show, setShow] = useState("none");
  const [display, setDisplay] = useState("none");

    return(
      <>
      <ContextComponent.Provider value = {{show, setShow, display, setDisplay}} >
  
        {/* <Routing/> */}
        <LoginWithGoogle/>
      </ContextComponent.Provider>
      </>
    )
}

export default App;