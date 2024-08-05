import mongoose from "mongoose";
const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        date:
        {
            type:Date,
            required:true,
        },
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        isDeleted: {type :Boolean ,default:false},
    }
);
const Product=mongoose.model("Product",schema);
export default Product;