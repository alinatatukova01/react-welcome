import "./style.css";
import React from "react";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      isEmailvalid: true
    };
  }



  submitHandler = (event) => {
    event.preventDefault();
    if (!this.state.email.includes('@')){
        this.setState({
            isEmailvalid: false
        })
    }
  };


  universalChangeHandler = ({target: {value,name}}) => {
    this.setState( {
        [name] : value
    })
  }

  render() {
    return (
      <form className="form-wrapper flex-column" onSubmit={this.submitHandler}>
        <label className="flex-column">
          Type your email
          <input
            type="text"
            placeholder="user@gmail.com"
            name="email"
            onChange={this.universalChangeHandler}
            value={this.state.email}
            className={this.state.isEmailvalid ? '' : 'valid'}
          />
        </label>
        <label className="flex-column">
          Type your password
          <input
            type="text"
            name="pass"
            onChange={this.universalChangeHandler}
            value={this.state.pass}
          />
        </label>

        <button type="submit">Submit form</button>
      </form>
    );
  }
}

export default SignInForm;
