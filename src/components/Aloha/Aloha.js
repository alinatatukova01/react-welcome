import React from "react";
import './Aloha.css'

class Aloha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: true,
      count: 0,
    }
  }

  changeText(){
    this.setState({
      greeting: !this.state.greeting,
      count: this.state.count + 1
    })
  }

  render() {
    const greeting = this.state.greeting ? "Hello" : "Buy";
    const className = this.state.greeting ? "greenText" : "redText";

    const {name,lastName} = this.props;

    return <h1 onClick={() => {this.changeText()}} className={className}>{greeting}, {name} {lastName}! Clicks: {this.state.count}</h1>;
  }
}

export default Aloha;
