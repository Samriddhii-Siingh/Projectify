import React from "react";
import './Signup.css';
import logo from './assets/image1.gif';
function SignUp()
{
    return(
<span className="signup-body">
<div className="signup-container-left">
    <div className="signup-img">
<img src={logo} alt="loading"/>
</div>
</div>
<div className="signup-card">
<h1 className="signup-header">Register HERE</h1>
<form className="signup-form">
    <input type="text" className="signup-name" placeholder="First Name"></input>
    <input type="text" className="signup-name" placeholder="Last Name"></input>
    <br/>
    <input type="email" className="signup-email" placeholder="Email"></input>
    <br/>
    <input type="number" className="signup-reg_no" placeholder="Registration Number."></input>
    <br/>
    <input type="password" className="signup-password" placeholder="Password"></input>
    <input type="password" className="signup-password" placeholder="Confirm Password"></input>
    <br/>
    <div className="signup-designation-container">
    <label className="signup-designation-note">I'm a </label><br/>
    <input type="Radio"  name="signup-designation"/>
    <label>Mentor</label><br/>    
    <input type="Radio"  name="signup-designation"/>
    <label>Student</label>
    </div>
    <br/>
    <button className="signup-submit">Submit</button>
    <button className="signup-clear">Clear</button>
    <br/>
    <br/>
    <div className="signup-anchor">
    <a href="google.com">Already a Member?</a>
    </div>
    </form>
</div>

</span>
);
}
export default SignUp;