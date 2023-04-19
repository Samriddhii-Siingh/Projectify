import React from "react";
import "./Form.css";
import logo from "./assets/image2.gif";

function Form() {
  return (
    <div className="assign-body">
      <div className="assign-img">
        <img src={logo} alt="" />
      </div>
      <div className="assign-card">
        <form className="assign-form">
          <h1 className="assign-card-title">Registration Form</h1>
          <div className="assign-dropdown">
            <select className="assign-drop">
              <option>Language</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>
            <select className="assign-drop">
              <option>Mentor</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>
            <select className="assign-drop">
              <option>Domain</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>
          </div>
          
          <input type="textArea" className="assign-project" placeholder="Project"/>
          <br />
          <input
            type="textArea"
            className="assign-card-text"
            placeholder="Project Details"
          />
          
          <br />
          <button type="submit" className="assign-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
