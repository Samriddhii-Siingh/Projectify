const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema (
    {
        first_name: String,
        last_name: String,
        email: { type: String, unique: true, required: true },
        reg_no: {type: Number, unique: true, required: true },
        password: String,
        designation: String 
    },
    {
        collection: "student_data"
    }
);
mongoose.model("student_data", StudentSchema);

const MentorSchema = new mongoose.Schema (
    {
        first_name: String,
        last_name: String,
        email: { type: String, unique: true, required: true },
        reg_no: {type: String, unique: true, required: true },
        password: String,
        designation: String
    },
    {
        collection: "mentor_data"
    }
);

mongoose.model("mentor_data", MentorSchema);


const ProjectSchema = new mongoose.Schema (
    {
        mentor_name: String,
        mentor_id: String,
        project_name: String,
        project_id: { type: String, unique: true, required: true },
        project_description: String,
        domain: String,  
        tech_used: String,
        
    },
    {
        collection: "project_data"
    }
);
mongoose.model("project_data", ProjectSchema);

const AssignSchema  = new mongoose.Schema (
    {
        student_id: Number,
        student_name: String,
        mentor_id: String,
        mentor_name: String,
        project_id: String,
        project_name: String,
        domain: String
    }, 
    {
        collection: "assign_data"
    }
);
mongoose.model("assign_data", AssignSchema);
