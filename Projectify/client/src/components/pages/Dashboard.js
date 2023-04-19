import React, { Component } from "react";
import "./Dashboard.css";

import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    }
  }

    componentDidMount() {
        fetch("http://localhost:5000/userData", {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData response");
      this.setState({ userData: data.data })
      console.log(this.state.userData, "userData state");
      if(data.data == "token expired") {
        alert("Token expired login again");

        window.localStorage.clear();
        window.location.href="./login";
      }
    });
    }

    render() {
      console.log(this.state.userData, "userData in render");
      return (
        <div className="dashboard-container">
          <div className="dashboard-card">
            <div className="dashboard-upper-container">
              <div className="dashboard-image-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDyXr-aFKgfQLHWmjlBk7HB8kJFk68mVlpjY9cFw&s"
                  alt="..."
                />
              </div>
            </div>
            <div className="dashboard-mid-container-1">
              <h1>{this.state.userData.first_name}</h1>
              <hr />
              <h4>{this.state.userData.reg_no}</h4>
              <p>{this.state.userData.designation}</p>
              <p>Manipal University Jaipur</p>
              <hr />
            </div>
            <div className="dashboard-mid-container-2">
              <h3>Domain(s) selected :</h3>
              <p>Web Development</p>
              <h3>Language(s) known:</h3>
              <p>HTML, CSS, JavaScript, React.js</p>
    
              <hr />
            </div>
    
            <div className="dashboard-lower-container">
              <div className="dashboard-social-handle">
                <a href={"mailto:" + this.state.userData.email}>
                  <FaEnvelope /> {this.state.userData.email}
                </a>
                <br />
                <a href="#">
                  <FaLinkedin /> linkedin
                </a>
                <br />
                <a href="#">
                  <FaGithub /> github
                </a>
              </div>
            </div>
        </div>
  
        <div className="dashboard-project-status">
          <div className="dashboard-project-container">
            <div className="dashboard-project-detail">
              <h2>Project Title</h2>
              <h4>Project-ID</h4>
              <h3>Mentor Name</h3>
            </div>
            <div className="dashboard-project-detail">
              <h2>Project Title</h2>
              <h4>Project-ID</h4>
              <h3>Mentor Name</h3>
            </div>
          </div>
        </div>
  
        <div className="dashboard-notifi-box" id="box">
          <h2>
            Notifications <span>17</span>
          </h2>
          <div className="dashboard-notifi-item">
            <div className="dashboard-notifi-text">
              <h4>Elias Abdurrahman</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
  
          <div className="dashboard-notifi-item">
            <div className="dashboard-notifi-text">
              <h4>John Doe</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
  
          <div className="dashboard-notifi-item">
            <div className="dashboard-notifi-text">
              <h4>Emad Ali</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
  
          <div className="dashboard-notifi-item">
            <div className="dashboard-notifi-text">
              <h4>Ekram Abu </h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
  
          <div className="dashboard-notifi-item">
            <div className="dashboard-notifi-text">
              <h4>Jane Doe</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
  
        <div className="dashboard-request-container">
          <div className="dashboard-request-meet">
            <ul>
              <li>
                <a href="#">Request a meet</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      )
  }
}

