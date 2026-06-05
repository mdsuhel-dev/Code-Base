import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,"username require"],
        unique:[true,"username already exist"]
    },
    email:{
        type:String,
        require:[true,"email require"],
        unique:[true,"email already exist"]
    },
    password:{
        type:String,
        require:[true,"password require"]
    }
})

const userModel = mongoose.model("users", userSchema)

export default userModel