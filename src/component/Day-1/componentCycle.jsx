
import "../../App.css";
import React from "react";
// import Home from '../Day-20-21-Routing/Home.jsx';

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      newName: "dfg",
      num: 21,
    };
    console.log("Constructor function is called");
  }

  componentDidMount() {
    console.log("ComponentDidMount() called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() called");
    return true;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponetUpdate() called");
    console.log("Next state: " + nextState.num);
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("getSnapshotBeforeUpdate() called");
    console.log("Previous State: " + prevState.num);
    return 0;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount() called");
  }
  changeState = () => {
    this.setState({
      num: this.state.num + 2,
    });
  };

  render() {
    console.log("re-render");
    return (
      <>
      {/* <Home/> */}
      <div style={{textAlign:"center", lineHeight:"30px"}}>
      <h3 style={{margin:"20px"}}>Class Component LifeCycle Example!</h3>
      <p style={{fontSize:"20px"}}> {this.state.num} </p>
          <button onClick={this.changeState} style={{padding:"7px", fontSize:"15px", marginBottom:"10px"}}> Click here! </button>
      <p>Open console to see output</p>
      <img src="https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png" alt="react-img" style={{width:"200px", height:"200px"}} />
      </div>
      </>
      
    )
  }
}

export default LifeCycle;
