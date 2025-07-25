import React from "react";

const EXCHANGE_RATE = 41.84;

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        grivnas : 0,
        dollars: 0,
    }
  }

  universalOnChange = ({target: {name,value}}) => {
    const newValue = Number(value);
    if (name === 'grivnas'){
        this.setState({
            dollars: (newValue / EXCHANGE_RATE).toFixed(2),
            grivnas: newValue
        })
    } else {
        this.setState({
            grivnas: (newValue * EXCHANGE_RATE).toFixed(2),
            dollars: newValue,
        })
    }

  }

  render() {
    return (
      <>
        <label>
          UAH ₴<input type="text" name="grivnas" onChange={this.universalOnChange} value={this.state.grivnas}/>
        </label>

        <label>
          USD $<input type="text" name="dollars" onChange={this.universalOnChange} value={this.state.dollars}/>
        </label>
      </>
    );
  }
}

export default Converter;
