const express = require("express");
const cors = require("cors");

const app = express();

// require testroutes
const testRoutes = require("./routes/testRoutes");

// require authroutes
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/test",testRoutes);
app.use("/api/auth",authRoutes);

// Routes
app.get("/",(req,res) =>{
    res.send("Task Management system API is working...");
})


module.exports = app;
