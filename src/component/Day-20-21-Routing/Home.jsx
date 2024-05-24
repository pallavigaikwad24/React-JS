import React, { useContext } from 'react'
import Topics from './Topics';
import WeekTopics from './WeekTopics';
import { ContextComponent } from '../../App';
import './style.css';

function Home() {

    const divStyle = {
        width:"100%", 
        height:"90px", 
        backgroundColor:"#F6EEE0",
        borderBottom: "1px solid #A45C40"
    }

  return (
    <>
        <div style={divStyle}>
            <h2 style={{fontSize: "35px", paddingTop:"20px", color:"#A45C40", textAlign:"center"}}>React Topics Covered</h2>
        </div>
        <Topics/>
    </>
  )
}

export default Home;