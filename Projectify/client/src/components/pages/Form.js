import React, { useState, useEffect } from "react";
import "./Form.css";
import logo from "./assets/image2.gif";

function Form(props) {
  const [userData, setUserData] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
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
        setUserData(data.data);
        setStudentName(data.data.first_name);
        setStudentId(data.data.reg_no);

        console.log(data, "userData");
        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentName !== userData.first_name) {
      alert("Student name does not match");
      return false;
    }
    if (studentId !== userData.reg_no) {
      alert("Student Id does not match");
      return false;
    }

    console.log(
      studentName,
      studentId,
      mentorName,
      mentorId,
      projectName,
      projectId,
      domain
    );
    fetch("http://localhost:5000/assignment", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        student_name: studentName,
        student_id: studentId,
        mentor_name: mentorName,
        mentor_id: mentorId,
        project_name: projectName,
        project_id: projectId,
        domain: domain,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log(data, "Project Upload Successful");
          alert("Request sent Successfully");
        } else {
          console.log(data);
        }
      });
  };

  const [projects, setProjects] = useState([]);
  const [selectedProjectData, setSelectedProjectData] = useState(null);


  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  // function to handle changes in student name input
  const handleNameChange = (e) => {
    setMentorName(e.target.value);
  }

  // function to handle changes in project dropdown
  const handleProjectChange = (e) => {
    const projectName = e.target.value;
    const selectedProjectData = projects.find(
      (project) => project.project_name === projectName
    );
    setSelectedProjectData(selectedProjectData);
    setProjectName(projectName);
    setProjectId(selectedProjectData.project_id);
    setMentorName(selectedProjectData.mentor_name);
    setMentorId(selectedProjectData.mentor_id);
    setDomain(selectedProjectData.domain);
  };
  

  // function to handle changes in student id input
  const handleIdChange = (e) => {
    setStudentId(e.target.value);
  }



  return (
    <div className="assign-body">
      <div className="assign-img">
        <img src={logo} alt="" />
      </div>
      <div className="assign-card">
        <form className="assign-form" onSubmit={handleSubmit}>
          <h1 className="assign-card-title">Registration Form</h1>
          <input
            type="text"
            className="upload-mentor"
            placeholder="Student Name"
            value={studentName}
            onChange={handleNameChange}
          />
          <input
            type="number"
            className="upload-mentor"
            placeholder="Student Id"
            value={studentId}
            onChange={handleIdChange}
            required
          />

          <div className="assign-dropdown">
            <select className="assign-drop" onChange={handleProjectChange}>
              <option>Project Title</option>
              {projects.map((project) => (
                <option key={project.project_id} value={project.project_name}>
                  {project.project_name}
                </option>
              ))}
            </select>

            {selectedProjectData && (
              <>
                <div className="assign-project-id-box">
                  Project ID: {selectedProjectData.project_id}
                </div>

                <div className="assign-mentor-name-box">
                  Mentor Name: {selectedProjectData.mentor_name}
                </div>

                <div className="assign-mentor-id-box">
                  Mentor ID: {selectedProjectData.mentor_id}
                </div>

                <div className="assign-domain-box">
                  Domain: {selectedProjectData.domain}
                </div>
              </>
            )}
          </div>

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
