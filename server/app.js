const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/",(req,res) =>{
    res.send("Task Management system API is working...");
})


module.exports = app;
