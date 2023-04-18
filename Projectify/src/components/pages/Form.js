import React from "react";
import "./Form.css";
import logo from "./assets/image2.gif";

function Form() {
  return (
    <>
      <img src={logo} alt="" />
      <div className="login-card">
        <form className="login-form">
          <h1 className="login-card-title">Registration Form</h1>
          <select className="login-drop">
            <option>Language</option>
            <option value="JS">JAVASCRIPT</option>
            <option value="CSS">CSS</option>
            <option value="PHP">PHP</option>
            <option value="HTML">HTML</option>
          </select>
          <select className="login-drop">
            <option>Mentor</option>
            <option value="JS">JAVASCRIPT</option>
            <option value="CSS">CSS</option>
            <option value="PHP">PHP</option>
            <option value="HTML">HTML</option>
          </select>
          <select className="login-drop">
            <option>Domain</option>
            <option value="JS">JAVASCRIPT</option>
            <option value="CSS">CSS</option>
            <option value="PHP">PHP</option>
            <option value="HTML">HTML</option>
          </select>
          <br />
          <input type="text" className="login-card-text" placeholder="Project" />
          <br />
          <input
            type="textArea"
            className="login-card-text"
            placeholder="Project Details"
          />
          <br />
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
