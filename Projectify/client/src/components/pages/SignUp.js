import React from "react";
import "./Signup.css";
import logo from "./assets/image1.gif";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    // initialize state variables
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      reg_no: "",
      password: "",
    };

    // bind the handleSubmit method to this component
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // handle form submission
    e.preventDefault();
    const { first_name, last_name, email, reg_no, password } = this.state;
    console.log(first_name, last_name, email, reg_no, password );
    fetch("http://localhost:5000/signup", {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        reg_no,
        password
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "SignUp successful");
    })
  }

  render() {
    return (
      <span className="signup-body" onSubmit={this.handleSubmit}>
        <div className="signup-container-left">
          <div className="signup-img">
            <img src={logo} alt="loading" />
          </div>
        </div>
        <div className="signup-card">
          <h1 className="signup-header">Register HERE</h1>
          <form className="signup-form">
            <input
              type="text"
              className="signup-name"
              placeholder="First Name"
              onChange={e => this.setState({first_name: e.target.value})}
            ></input>
            <input
              type="text"
              className="signup-name"
              placeholder="Last Name"
              onChange={e => this.setState({last_name: e.target.value})}
            ></input>
            <br />
            <input
              type="email"
              className="signup-email"
              placeholder="Email"
              onChange={e => this.setState({email: e.target.value})}
            ></input>
            <br />
            <input
              type="number"
              className="signup-reg_no"
              placeholder="Registration Number"
              onChange={e => this.setState({reg_no: e.target.value})}
            ></input>
            <br />
            <input
              type="password"
              className="signup-password"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
            ></input>
            <input
              type="password"
              className="signup-password"
              placeholder="Confirm Password"
            ></input>
            <br />
            <div className="signup-designation-container">
              <label className="signup-designation-note">I'm a </label>
              <br />
              <input type="Radio" name="signup-designation" />
              <label>Mentor</label>
              <br />
              <input type="Radio" name="signup-designation" />
              <label>Student</label>
            </div>
            <br />
            <button className="signup-submit">Submit</button>
            <button className="signup-clear">Clear</button>
            <br />
            <br />
            <div className="signup-anchor">
              <a href="google.com">Already a Member?</a>
            </div>
          </form>
        </div>
      </span>
    );
  }
}

export default SignUp;
