const express = require("express");
const app = express();
const mentors = require("./routes/mentor")
const students = require("./routes/student");
const { home } = require("./routes/design");

app.use(express.json())

app.get("/",home)
app.use("/api/v1/",mentors)
app.use("/api/v1/",students)

 
module.exports = app;