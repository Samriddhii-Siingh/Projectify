import React, { useEffect, useState } from "react";
import "./Project_Mentor.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="project-body-container">
      {projects.map((project) => (
        <div className="project-card" key={project._id}>
          <h3 className="project-card-title">{project.project_name}</h3>
          <span className="project-card-id">Project Id: {project.project_id}</span>
          <div className="project-card-mentor">
            {project.mentor_name}
          </div>
          <div className="project-card-domain">
            Domain: {project.domain}
          </div>
          <hr />
          <div className="project-card-desc">{project.project_description}</div>
        </div>
      ))}
    </div>
  );
};

export default Project;
