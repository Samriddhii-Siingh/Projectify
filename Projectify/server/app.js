const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "hajdguHANKjcbjhdgsfyetrt735679urhefvbd1267e829ijwfnqc1309urb97c8fygfw1920f89ytg"

const mongoUrl = "mongodb://127.0.0.1:27017/projectifyDB";

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((e) => console.log(e));

require("./projectifyDB");

const Student = mongoose.model("student_data");
const Mentor = mongoose.model("mentor_data");
const Project = mongoose.model("project_data");

app.post("/signup", async(req, res) => {
    const { first_name, last_name, email, reg_no, password,designation} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    if(designation=="student"){
    try {
        const oldUser = await Student.findOne({ email });

        if(oldUser) {
            return res.send({ error: "User already exists"});
        }
        await Student.create({
            first_name,
            last_name,
            email,
            reg_no,
            password: encryptedPassword,
            designation
        });
        res.send({status : "ok"});
    } catch (error) {
        res.send({ status: "error"})
    }}
    else if(designation=="mentor")
    {
        try {
            const oldUser = await Mentor.findOne({ email });
    
            if(oldUser) {
                return res.send({ error: "User already exists"});
            }
            await Mentor.create({
                first_name,
                last_name,
                email,
                reg_no,
                password: encryptedPassword,
                designation
            });
            res.send({status : "ok"});
        } catch (error) {
            res.send({ status: "error"})
        }   
    }
});

app.post("/login", async(req,res) => {
    const { email, password, designation } = req.body;
    if(designation === "student") {
    const user = await Student.findOne({ email });

    if(!user) {
        return res.json({ error: "User not found" });
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email, designation: user.designation }, JWT_SECRET);


        if(res.status(201)) {
            return res.json({ status: "ok", data: token});
        } else {
            return res.json({ error: "error"});
        }
    }
    res.json({ status: "error", error: "Invalid Password"});
}
else if(designation === "mentor")
{
    const user = await Mentor.findOne({ email });
    if(!user) {
        return res.json({ error: "User not found" });
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email, designation: user.designation }, JWT_SECRET);

        if(res.status(201)) {
            return res.json({ status: "ok", data: token});
        } else {
            return res.json({ error: "error"});
        }
    }
    res.json({ status: "error", error: "Invalid Password"});
}
});

app.post("/userData", async (req,res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);

        const usermail = user.email;
        const designation = user.designation;

        if(designation == "student") {
            Student.findOne({ email: usermail })
                .then((data) => {
                    res.send({ status: "ok", data: data});
                })
                .catch((error) => {
                    res.send({ status: "error", data: error})
                })
        } else if (designation == "mentor") {
            Mentor.findOne({ email: usermail })
                .then((data) => {
                    res.send({ status: "ok", data: data});
                })
                .catch((error) => {
                    res.send({ status: "error", data: error})
                })
        }
    } catch (error) {
        res.send({ status: "error", data: error})
    }
});

app.post("/upload", async(req,res)=>{
const { mentor_name,mentor_id, project_name,project_id, project_description,tech_used, domain} = req.body;
try {
    const oldId=await Project.findOne({project_id});
    if(oldId)
    {
        return res.send({error:"Project with this id already exist"});
    }
    await Project.create({
        mentor_name,
        mentor_id,
        project_name,
        project_id, 
        project_description,
        tech_used, 
        domain
    });
    res.send({status:"ok"});
} catch (error) {
    res.send({status:"error"});
}
});

app.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

app.get('/projects/dropdown/:name', async (req, res) => {
    const { name } = req.params;
    const dropdown = await Project.findOne({ name });
    res.json(dropdown.options);
});

app.listen(5000, () => {
    console.log("Server started");
});
    