import React from "react";
import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaDiscord, FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      {/* Social icons */}
      <div className="social">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithubSquare />
        </a>
        <a href="#">
          <FaEnvelope />
        </a>
        <a href="#">
          <FaDiscord />
        </a>
      </div>

      {/* Navigation links */}
      <ul className="list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/aboutUs">About</CustomLink>
        <CustomLink to="/contactUs">Contact</CustomLink>
        <CustomLink to="/privacyPolicy">Privacy Policy</CustomLink>
      </ul>

      {/* Copyright */}
      <p className="copyright">
        Projectify &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      {/* Navigation link */}
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Footer;
