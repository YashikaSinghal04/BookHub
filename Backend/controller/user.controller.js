import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signup=async (req,res)=>{
    try{
        console.log("Request body:", req.body);
        const {fullname,email,password}=req.body;
        
        // Check if all required fields are present
        if(!fullname || !email || !password){
            return res.status(400).json({
                message: "All fields are required",
                missing: {
                    fullname: !fullname,
                    email: !email,
                    password: !password
                }
            });
        }
        
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const createUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        });
        await createUser.save();
        res.status(201).json({message:"User created successfully",
            user:{
                _id:createUser._id,
                fullname:createUser.fullname,
                email:createUser.email,
            }
        });
    }catch(error){
        console.log("Error details:", error);
        if(error.name === 'ValidationError'){
            return res.status(400).json({
                message: "Validation failed",
                errors: Object.values(error.errors).map(err => err.message)
            });
        }
        res.status(500).json({message:"Internal server error"});
    }
}

export const login=async (req,res)=>{
    try{
        console.log("Login request body:", req.body);
        const {email,password}=req.body;
        
        // Check if email and password are provided
        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            });
        }
        
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }
        
        res.status(200).json({
            message:"Login successful",
            user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }
        });
    }catch(error){
        console.log("Login Error:", error);
        res.status(500).json({message:"Internal server error"});
    }
}