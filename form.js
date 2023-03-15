import React from "react";
import './form.css';
import logo from '../Images/image2.gif';
function Form(){
   
return(
    <>
    <img src={logo} alt=""/>
    <div className="card">
    <form className="form">
        <h1 className="title">Registration Form</h1>
    <select className="drop">
    <option>Language</option>
        <option value="JS">JAVASCRIPT</option>
        <option value="CSS">CSS</option>
        <option value="PHP">PHP</option>
        <option value="HTML">HTML</option>
    </select>
    <select className="drop">
        <option>Mentor</option>
        <option value="JS">JAVASCRIPT</option>
        <option value="CSS">CSS</option>
        <option value="PHP">PHP</option>
        <option value="HTML">HTML</option>
    </select>
    <select className="drop">
    <option>Domain</option>
        <option value="JS">JAVASCRIPT</option>
        <option value="CSS">CSS</option>
        <option value="PHP">PHP</option>
        <option value="HTML">HTML</option>
    </select><br/>
    <input type="text" className="txt" placeholder="Project"/><br/>
    <input type="textArea" className="txt" placeholder="Project Details"/><br/>
    <button type="submit" className="button">Register</button>
</form>
</div>
</>
);
}
export default Form;