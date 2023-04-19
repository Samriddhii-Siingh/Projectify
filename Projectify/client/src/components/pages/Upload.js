import './Upload.css';
import React from 'react';
//import logo from '../Images/working.gif'
class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mentor_name:"",
            mentor_id:"",
            project_name:"",
            project_id:"",
            project_description:"",
            domain:"",
            tech_used:"",

        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e)
    {
        e.preventDefault();
        const { mentor_name,mentor_id, project_name,project_id, project_description, domain,tech_used} = this.state;
        console.log(mentor_name,mentor_id, project_name,project_id, project_description,domain,tech_used);
        fetch("http://localhost:5000/Upload",{
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
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"Project Upload Successful");
            if(data.status=="ok")
            {
                alert("Uploaded Successfully");
            }
        })
    }

    render(){
    return(
        <div className="Upload-state" onSubmit={this.handleSubmit}>
        <div className="Upload-img">
        {/* <img src={logo} alt=""/> */}
        </div>
         <div className="Upload-card">
            <h1 className="Upload-header">Project Form</h1>
            <form>
                <input type="text" className="Upload-mentor" placeholder="Mentor Name" onChange={e=>this.setState({mentor_name:e.target.value})}/>
                <input type="text" className="Upload-mentor" placeholder="Mentor ID" onChange={e=>this.setState({mentor_id:e.target.value})}/>
                <br/>
                <input type="text" className="Upload-project" placeholder="Project Title" onChange={e=>this.setState({project_name:e.target.value})}/>
                <input type="text" className="Upload-project" placeholder="Project ID" onChange={e=>this.setState({project_id:e.target.value})}/>
                <input type="textArea" className="Upload-desc" placeholder="Project Description" onChange={e=>this.setState({project_description:e.target.value})}/>
                <br/>
                <input type="text" className="Upload-domain" placeholder="Domain Name" onChange={e=>this.setState({domain:e.target.value})}/>
                <input type="text" className="Upload-lang" placeholder="Preferred Language" onChange={e=>this.setState({tech_used:e.target.value})}/>
                <br/>
                
                <br/>
                <br/>
                <button className="Upload-submit">Submit</button>
                <button className="Upload-clear">Clear</button>
            </form>
        </div>
        </div>
    );
}
}
export default ProjectForm;