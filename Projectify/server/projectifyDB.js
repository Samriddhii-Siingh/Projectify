const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema (
    {
        first_name: String,
        last_name: String,
        email: { type: String, unique: true, required: true },
        reg_no: {type: Number, unique: true, required: true },
        password: String,
        designation: String,
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
        reg_no: {type: Number, unique: true, required: true },
        password: String,
        designation: String,
    },
    {
        collection: "mentor_data"
    }
);

mongoose.model("mentor_data", MentorSchema);


const ProjectSchema = new mongoose.Schema (
    {
        lang: String,
        mentor_reg_no: Number,
        domain: String,
        p_name: String,
        p_description: String,
        student_reg_no: Number,
    },
    {
        collection: "project_data"
    }
);

mongoose.model("project_data", ProjectSchema);
