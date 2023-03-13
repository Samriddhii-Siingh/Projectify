import React from "react";
import './Signup.css';
import logo from './assets/image1.gif';
function Login()
{
    return(
<span>
<div className="left">
<img src={logo} alt="loading"/>
</div>
<div className="card">
<h1>Register HERE</h1>
<form>
    <input type="text" className="name" placeholder="First Name"></input>
    <input type="text" className="name" placeholder="Last Name"></input>
    <br/>
    <input type="text" className="email" placeholder="Email"></input>
    <br/>
    <input type="text" className="reg_no" placeholder="Registration Number."></input>
    <br/>
    <input type="text" className="pass" placeholder="Password"></input>
    <input type="text" className="pass" placeholder="Confirm Password"></input>
    <br/>
    <div className="designation">
    <label className="note">I'm a </label><br/>
    <input type="Radio"  name="designation"/>
    <label>Mentor</label><br/>    
    <input type="Radio"  name="designation"/>
    <label>Student</label>
    </div>
    <br/>
    <button className="submit">Submit</button>
    <button className="clear">Clear</button>
    <br/>
    <br/>
    <a href="google.com">Already a Member?</a>
    </form>
</div>

</span>
);
}
export default Login;