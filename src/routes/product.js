import express from "express";
const productData=express.Router();
import productModel from "../models/productModel.js";
export const createProduct=async (req, res) => {
    try {
        const result = await productModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const getproduct=async(req,res)=>{
    try
    {
    const productsData=await productModel.aggregate([
        {
            $lookup:
            {
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            }
        }
    ]).exec();
    res.status(200).json(productsData);
    }
    catch({message}){
        res.json({message});
    }
};
export const getproductbyId=async(req,res)=>
{
    try{
        const productdata=await productModel.findById(req.params.id).exec();
        res.status(200).json(productdata);
    }
    catch({message}){
        res.json({message});
    }
};
export const updateproductbyId=async(req,res)=>
    {
        try{
            const updateproductData=await productModel.findByIdAndUpdate(req.params.id,req.body).exec();
            res.status(200).json(updateproductData);
        }
        catch({message}){
            res.json({message});
        }
    };
    export const deleteproductbyId=async(req,res)=>
        {
            try{
                const deleteproductData=await productModel.findByIdAndDelete(req.params.id).exec();
                res.status(200).json(deleteproductData);
            }
            catch({message}){
                res.json({message});
            }
        };
 