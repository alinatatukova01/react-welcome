import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
  }

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  //как только компонента отрендерилась - выполняется эта функция
  componentDidMount() {
    this.start();
  }


  //перед тем как компоненту отмонтируют она выполнит это действие
  componentWillUnmount(){
    console.log('I will die!!!');
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button>Click me</button>
      </>
    );
  }
}

export default Counter;
