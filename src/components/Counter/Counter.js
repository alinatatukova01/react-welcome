import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    render(){
        console.log('render');
        return <h1 onClick={() => this.setState({count: 1})}>Hello</h1>
    }
}

export default Counter;