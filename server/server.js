const dotenv = require("dotenv");
dotenv.config();

// require mongoDB
const connectDB = require("./config/db");


// require app.js
const app = require("./app");

// connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`server is listening ${PORT}`);
})