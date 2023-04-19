import './Upload.css';
import logo from "./assets/working.gif";
import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor_name: "",
      mentor_id: "",
      project_name: "",
      project_id: "",
      project_description: "",
      domain: "",
      tech_used: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      mentor_name,
      mentor_id,
      project_name,
      project_id,
      project_description,
      domain,
      tech_used,
    } = this.state;
    console.log(
      mentor_name,
      mentor_id,
      project_name,
      project_id,
      project_description,
      domain,
      tech_used
    );
    fetch("http://localhost:5000/upload", {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mentor_name,
        mentor_id,
        project_name,
        project_id,
        project_description,
        domain,
        tech_used,

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Project Upload Successful");
        if (data.status == "ok") {
          alert("Uploaded Successfully");
        }
      })
  }

  render() {
    return (
      <div className="upload-state" onSubmit={this.handleSubmit}>
        <div className="upload-img">
          <img src={logo} alt=""/>
        </div>
        <div className="upload-card">
          <h1 className="upload-header">Project Form</h1>
          <form className='upload-form'>
            <input 
              type="text" 
              className="upload-mentor" 
              placeholder="Mentor Name" 
              onChange={e => this.setState({ mentor_name: e.target.value })}
              required 
              pattern="[A-Za-z]+\s[A-Za-z]+"
            />

            <input
              type="text"
              className="upload-mentor"
              placeholder="Mentor ID"
              pattern="[A-Za-z0-9]{9}"
              onChange={e => this.setState({ mentor_id: e.target.value })}
              required
            />

            <br />
            <input type="text" className="upload-project" placeholder="Project Title" onChange={e => this.setState({ project_name: e.target.value })} required pattern=".{5,}" title="Title must be at least 5 characters long" />

            <input type="text" className="upload-project" placeholder="Project ID" onChange={e => this.setState({ project_id: e.target.value })} required pattern="[A-Z0-9]{4,}" title="Project ID must be a combination of uppercase letters and digits only with minimum length of 4 characters" />

            <textarea 
              className="upload-desc" 
              placeholder="Project Description" 
              onChange={e => {
                const value = e.target.value;
                if (value.split(' ').length < 5) {
                  alert('Description must be at least 5 words long.');
                } else {
                  this.setState({ project_description: value });
                }
              }}>
            </textarea>

            <br />
            <input type="text" className="upload-domain" placeholder="Domain Name" required minLength={3} onChange={e => this.setState({ domain: e.target.value })} />
            <input type="text" className="upload-lang" placeholder="Technology to be Used" required minLength={1} onChange={e => this.setState({ tech_used: e.target.value })} />

            <br />
            <br />
            <div className="upload-btns">
              <button className="upload-submit" onClick={this.handleSubmit}>Submit</button>
              <button className="upload-clear" onClick={() => this.setState({ 
                  mentor_name: "",
                  mentor_id: "",
                  project_name: "",
                  project_id: "",
                  project_description: "",
                  domain: "",
                  tech_used: ""
              })}>Clear</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}
