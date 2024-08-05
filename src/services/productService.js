import express from "express";
const data=express.Router();
import {
    createProduct,
    getproduct,
    getproductbyId,
    updateproductbyId,
    deleteproductbyId
}from "../routes/product.js";
data.post("/",createProduct);
data.get("/",getproduct);
data.get("/:id",getproductbyId);
data.patch("/:id",updateproductbyId);
data.delete("/:id",deleteproductbyId);
export default data;