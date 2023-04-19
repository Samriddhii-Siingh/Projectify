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
            <select className="assign-drop" required>
              <option value="" disabled selected hidden>Language</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>

            <select className="assign-drop" required>
              <option value="" disabled selected hidden>Mentor</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>

            <select className="assign-drop" required>
              <option value="" disabled selected hidden>Domain</option>
              <option value="JS">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="HTML">HTML</option>
            </select>

          </div>
          <br />
          <input type="text" className="assign-card-text" placeholder="Project" />
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
