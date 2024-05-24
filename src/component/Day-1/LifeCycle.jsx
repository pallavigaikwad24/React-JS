// import logo from "C:/Users/lenovo/Desktop/React-App/reactapp/src/logo.svg";
// import "C:/Users/lenovo/Desktop/React-App/reactapp/src/App.css";
import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 21,
    };
    console.log("Constructor function is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() called");
    return true;
  }

  componetDidMount() {
    console.log("ComponentDidMount() called");
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
      num: this.state.num + 1,
    });
  };

  render() {
    console.log("re-render");
    return (
      <div className="App">
        <header className="App-header">
        <h2>React App</h2>
          <p> {this.state.num} </p>
          <button onClick={this.changeState}> Click here! </button>
        </header>
      </div>
    );
  }
}

export default LifeCycle;
