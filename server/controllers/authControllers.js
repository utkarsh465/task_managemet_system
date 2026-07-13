const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async (req,res) =>{
    try{
        const {name,email,password} = req.body;

        //Validation

        if(!name || !email || !password){
            res.status(400).json({
                message:"please provide all fields",
            });
        }

        // check if email already exists

        const userExists = await User.findOne({email});
        if(userExists){
            res.ststus(400).json({
                message:"User already registered",
            });
        }

        // generate salt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        console.log("original password:",password);
        console.log("Hashed Password:",hashedPassword);

        // Create User
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });
        const userResponse = {
            _id:user._id,
            name:user.name,
            email:user.email,
            createdAt:user.createdAt,
        };
        res.status(201).json({
            message:"user registered successfully",
            User : userResponse,
        });
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

module.exports = {
    registerUser,
};