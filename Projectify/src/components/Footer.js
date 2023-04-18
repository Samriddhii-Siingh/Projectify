import React from "react";
import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a href="#">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-discord"></i>
        </a>
      </div>

      <ul className="list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/aboutUs">About</CustomLink>
        <CustomLink to="/contactUs">Contact</CustomLink>
        <CustomLink to="/privacyPolicy">Privacy Policy</CustomLink>
      </ul>

      <p className="copyright">Projectify @ {new Date().getFullYear()}</p>
    </div>
  );
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

export default Footer;
