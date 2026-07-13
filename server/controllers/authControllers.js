const User = require("./models/user");
const bycrypt = require("bycryptjs");

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
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password,salt);

    // Create User
        const user = await User.create({
            name,
            email,
            hashedPassword,
        });
        res.status(201).json({
            message:"user registered successfully",
            User,
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