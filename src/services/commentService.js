import express from "express";
const data=express.Router();
import {
    createcomment,
    getcomment,
    getcommentbyId,
    updatecommentbyId,
    deletecommentbyId
}from "../routes/comment.js";
data.post("/",createcomment);
data.get("/",getcomment);
data.get("/:id",getcommentbyId);
data.patch("/:id",updatecommentbyId);
data.delete("/:id",deletecommentbyId);
export default data;