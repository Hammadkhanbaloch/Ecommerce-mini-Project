import express from "express";
const data=express.Router();
import {
    createreview,
    getreview,
    getreviewbyId,
    updatereviewbyId,
    deletereviewbyId
}from "../routes/review.js";
data.post("/",createreview);
data.get("/",getreview);
data.get("/:id",getreviewbyId);
data.patch("/:id",updatereviewbyId);
data.delete("/:id",deletereviewbyId);
export default data;