import express from "express";
import mongoose from "mongoose"
import commentServices from "./services/commentService.js"
import productServices from "./services/productService.js"
import reviewServices from "./services/reviewServices.js"
import userServices from "./services/userServices.js"
const app=express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/learningdatabase");
const connection=mongoose.connection;
connection.once("connected",()=>console.log("data base is connected"));
app.use("/comment",commentServices);
app.use("/product",productServices);
app.use("/review",reviewServices);
app.use("/user",userServices);
app.listen(7000,()=>{console.log("Server is running on port 7000")});