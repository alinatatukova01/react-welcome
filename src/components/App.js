import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  changeColor() {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    const className = this.state.on ? "on" : "off";
    return (
      <>
        <div className={className}></div>
        <button
          onClick={() => {
            this.changeColor();
          }}
        >
          On/Off
        </button>
      </>
    );
  }
}

export default App;
