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

app.post("/signup", async(req, res) => {
    const { first_name, last_name, email, reg_no, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

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
            password: encryptedPassword
        });
        res.send({status : "ok"});
    } catch (error) {
        res.send({ status: "error"})
    }
});

app.post("/login", async(req,res) => {
    const { email, password } = req.body;

    const user = await Student.findOne({ email });
    if(!user) {
        return res.json({ error: "User not found" });
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email}, JWT_SECRET);

        if(res.status(201)) {
            return res.json({ status: "ok", data: token});
        } else {
            return res.json({ error: "error"});
        }
    }
    res.json({ status: "error", error: "Invalid Password"});
});

app.post("/userData", async (req,res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);

        const usermail = user.email;
        Student.findOne({ email: usermail })
            .then((data) => {
                res.send({ status: "ok", data: data});
            })
            .catch((error) => {
                res.send({ status: "error", data: error})
            })
    } catch (error) {
        
    }
});

app.listen(5000, () => {
    console.log("Server started");
});
    