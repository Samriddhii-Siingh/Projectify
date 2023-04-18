import React, { Component } from "react";
import "./Login.css";
import logo from "./assets/login2.gif";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password );
    fetch("http://localhost:5000/login", {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status == "ok") {
        alert("Login successful");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);

        window.location.href = "./dashboard";
      }
    })
  }

  render() {
    return (
      <>
        <div>
          <img src={logo} alt="loading" />
        </div>
        <div className="card">
          <h1>Login HERE</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="email"
              type="email"
              id="email"
              placeholder="Email"
              onChange={e => this.setState({email: e.target.value})}
            />
            <input
              className="password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
            />
            <button className="submit-button" type="submit">
              Sign-In
            </button>
            <button className="google-button" onClick={this.handleGoogleLogin}>
              Sign In with Google
              <span className="google-logo"></span>
            </button>
            <p className="forgot-password">
              <a href="/#" onClick={this.handleForgetPassword}>
                New User?
              </a>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
