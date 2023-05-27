import React from "react";
import "./Signup.css";
import logo from "./assets/image1.gif";
import { Link } from "react-router-dom";

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
    const { first_name, last_name, email, reg_no, password, designation} = this.state;
    console.log(first_name, last_name, email, reg_no, password, designation );
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
        password,
        designation,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      
      if(data.status == "ok") {
        alert("Signup successful");
        console.log(data, "SignUp successful");

        window.location.href = "./login";
      }
    })
  }

  render() {
    return (
      <div className="signup-state" onSubmit={this.handleSubmit}>
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
              onChange={e => {
                const re = /^[A-Za-z]{2,}$/;
                if (re.test(e.target.value)) {
                  this.setState({ first_name: e.target.value });
                } else {
                  // alert("Please enter a valid first name.");
                }
              }}
              required
            />

            <input
              type="text"
              className="signup-name"
              placeholder="Last Name"
              onChange={e => {
                const re = /^[A-Za-z]{2,}$/;
                if (re.test(e.target.value)) {
                  this.setState({ last_name: e.target.value });
                } else {
                  // alert("Please enter a valid last name.");
                }
              }}
              required
            />


            <br />
            <input
              type="email"
              className="signup-email"
              placeholder="Email"
              onChange={e => {
                const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
                if (re.test(e.target.value)) {
                  this.setState({ email: e.target.value });
                } else {
                  // alert("Please enter a valid email address.");
                }
              }}
              required
            />


            <br />
            <input
              type="text"
              className="signup-reg_no"
              placeholder="Registration Number"
              onChange={e => this.setState({reg_no: e.target.value})}
              
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Registration Number must be a 9-digit number");
                alert("Registration Number must be a 9-digit number");
              }}
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <br />
            <input
              type="password"
              className="signup-password"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
              required
              minLength={8}
            />

            <input
              type="password"
              className="signup-password"
              placeholder="Confirm Password"
              onBlur={e => {
                if (e.target.value !== this.state.password) {
                  alert("Passwords do not match");
                }
              }}
              required
              minLength={8}
            />

            <br />
            <div className="signup-designation-container">
              <label className="signup-designation-note">I'm a </label>
              <br />
              <input
                type="Radio"
                name="signup-designation"
                value="mentor"
                onChange={e => this.setState({designation: e.target.value})}
                required
              />
              <label>Mentor</label>
              <br />
              <input
                type="Radio"
                name="signup-designation"
                value="student"
                onChange={e => this.setState({designation: e.target.value})}
                required
              />
              <label>Student</label>
            </div>

            <br />
            <button type="submit" className="signup-submit">Submit</button>
            <button type="reset" className="signup-clear">Clear</button>

            <br />
            <br />
            <div className="signup-anchor">
              <Link to="/Login">Already a Member?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
