const mongoose = require("mongoose");

const ProjectifySchema = new mongoose.Schema (
    {
        first_name: String,
        last_name: String,
        email: { type: String, unique: true, required: true },
        reg_no: {type: Number, unique: true, required: true },
        password: String,
    },
    {
        collection: "student_data"
    }
);

mongoose.model("student_data", ProjectifySchema);