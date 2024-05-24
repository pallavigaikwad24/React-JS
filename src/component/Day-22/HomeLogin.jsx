import React from 'react'
import './homeLogin.css';
import { Link } from 'react-router-dom';

function Home() {
    
  return (
    <>
    <div className='body'>
        <nav>
            <button id='login'><Link to={'/login'}>Login</Link></button>
            <button id='signup'><Link to={'/signup'}>Sign Up</Link></button>
        </nav>

        <main>
            <h1 className='heading'>Welcome</h1>
            <h2 className='heading'>BookHub is Here</h2>
        </main>
        </div>
    </>
  )
}

export default Home