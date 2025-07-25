import React from "react";
import Form from "./Form";
import SquareGreetingUser from "./SquareGreetingUser";

class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showGreeting: false,
    };
  }

  submitHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  renderSqr = (event) => {
    event.preventDefault();
    this.setState({
        showGreeting: true
    })
  }

  render() {
    return (
      <>
        <Form
          text={this.state.text}
          callBackSubmitHandler={this.renderSqr} callBackOnChange = {this.submitHandler}
        />
        {this.state.showGreeting ? <SquareGreetingUser text={this.state.text}/> : null}
      </>
    );
  }
}

export default GreetingForm;
