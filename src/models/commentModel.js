import mongoose from "mongoose";
const schema=new mongoose.Schema(
    {
        content:
        {
            type:String,
            required:true,
            trim:true
        },
        date:
        {
            type:Date,
            default:Date.now
        },
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
            trim:true
        },
        productId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true,
            trim:true
        }
    }
);
const Comment=mongoose.model("Comment",schema)
export default Comment;