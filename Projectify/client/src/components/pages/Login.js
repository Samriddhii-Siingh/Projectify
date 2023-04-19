import React, { Component, useEffect} from "react";
import "./Login.css";
import logo from "./assets/login2.gif";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      designation: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, designation } = this.state;
    console.log(email, password, designation);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        designation
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./dashboard";
        }
      });
  }
  

  render() {
    
    return (
      <>
        <div className="login-img">
          <img src={logo} alt="loading" />
        </div>
        <div className="login-card">
          <h1>Login HERE</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
          <input
              type="email"
              id="email"
              className="login-email"
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
            <input
              className="login-password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              minLength={8}
              required
            />

            <div className="signup-designation-container">
              <label className="signup-designation-note">I'm a </label>
              <br />
              <input
                type="Radio"
                name="signup-designation"
                value="mentor"
                onChange={(e) =>
                  this.setState({ designation: e.target.value })
                }
                required
              />
              <label>Mentor</label>
              <br />
              <input
                type="Radio"
                name="signup-designation"
                value="student"
                onChange={(e) =>
                  this.setState({ designation: e.target.value })
                }
                required
              />
              <label>Student</label>
            </div>

            <br />
            <button className="login-submit-button" type="submit">
              Sign-In
            </button>
            <p className="login-forgot-password">
              <Link to="/signup">New User?</Link>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
