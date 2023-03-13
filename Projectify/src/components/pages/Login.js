import React,{useState} from "react";
import './Login.css';
import logo from './assets/login2.gif';
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleGoogleLogin=()=>{
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    };
    const handleForgetPassword=()=>{
    };
    return(
        <>
        <div>
            <img src={logo} alt="loading"/>
        </div>
        <div className="card">
        <h1>Login HERE</h1>
        <form className="form" onSubmit={handleSubmit}>
            <input
            className="email"
            type="email"
            id="email"
            placeholder="UserName"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            className="password"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        <button className="submit-button" type="submit">Sign-In</button>
        <button className="google-button" onClick={handleGoogleLogin}>Sign In with Google
        <span className="google-logo"></span></button>
        <p className="forgot-password">
            <a href="/#" onClick={handleForgetPassword}>New User?</a>
        </p>
        </form>
        </div>
        </>
    );
    }    
export default Login;