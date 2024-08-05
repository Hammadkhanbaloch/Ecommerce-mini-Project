import mongoose from "mongoose";
const schema=new mongoose.Schema(
    {
        userName:
        {
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        email:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true,
        },
        date:
        {
            type:Date,
            default:Date.now
        }
    }
);
const User=mongoose.model("User",schema);
export default User;