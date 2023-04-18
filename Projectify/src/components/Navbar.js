import { Component } from "react";
import "./NavbarStyles.css";
import icon from './pages/assets/logo.png';

import { Link, useMatch, useResolvedPath } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <Link to="/" className="site-title">
            <img src={icon} alt="logo" />
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "navbar"}
            >
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/project">Projects</CustomLink>
              <CustomLink to="/form">Form</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
              <CustomLink to="/login" id="login_signup">
                Login
              </CustomLink>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

function CustomLink({ to, children, ...props }) {
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

export default Navbar;
