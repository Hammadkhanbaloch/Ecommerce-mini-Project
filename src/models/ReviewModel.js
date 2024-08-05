import mongoose from "mongoose";
const schema= new mongoose.Schema({
    Title:
    {
        type:String,
        required:true,
        min:[3],
        max:[100],
        trim:true
    },
    content:
    {
        type:String,
        required:true,
        trim:true,
    },
    rating:
{
    type:Number,
    required:true
},
userId:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
productId:
{
     type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    //required:true
}
}
);
const Review=mongoose.model("Review",schema);
export default Review;

