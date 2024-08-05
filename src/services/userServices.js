import express from "express";
const data=express.Router();
import {
    createUser,
    getUser,
    getUserbyId,
    updateUserbyId,
    deleteUserbyId
}from "../routes/user.js";
data.post("/",createUser);
data.get("/",getUser);
data.get("/:id",getUserbyId);
data.patch("/:id",updateUserbyId);
data.delete("/:id",deleteUserbyId);
export default data;