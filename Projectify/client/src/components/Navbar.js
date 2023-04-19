import React, { useState, Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavbarStyles.css";
import icon from "./pages/assets/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        if (data.data === "token expired") {
          alert("Token expired login again");

          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  render() {
    return (
      <nav>
        <Link to="/" className="site-title">
          <img src={icon} alt="logo" />
        </Link>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "navbar active" : "navbar"}
          >
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/project">Projects</CustomLink>
            {localStorage.getItem("token") ? (
              <div>
                <CustomLink to="/form">Form</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/logout" id="login_signup" onClick={this.logOut}>
                  LogOut
                </CustomLink>
              </div>
            ) : (
              <Link to="/login" id="login_signup">
                Login
              </Link>
            )}
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
