import express from "express";
const reviewData=express.Router();
import reviewModel from "../models/ReviewModel.js";
export const createreview=async (req, res) => {
    try {
        const result = await reviewModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export  const getreview=async(req,res)=>{
    try
    {
    const reviewsData=await reviewModel.aggregate([
        {
            $lookup:
            {
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            },
        },
        {
            $lookup:
            {
                from:"products",
                localField:"productId",
                foreignField:"_id",
                as:"product"
            },
        }
    ]).exec();
    res.status(200).json(reviewsData);
    }
    catch({message}){
        res.json({message});
    }
};
export const getreviewbyId=async(req,res)=>
{
    try{
        const reviewdata=await reviewModel.findById(req.params.id).exec();
        res.status(200).json(reviewdata);
    }
    catch({message}){
        res.json({message});
    }
};
export const updatereviewbyId=async(req,res)=>
    {
        try{
            const updatereviewData=await reviewModel.findByIdAndUpdate(req.params.id,req.body).exec();
            res.status(200).json(updatereviewData);
        }
        catch({message}){
            res.json({message});
        }
    };
export const deletereviewbyId=async(req,res)=>
        {
            try{
                const deletereviewData=await reviewModel.findByIdAndDelete(req.params.id).exec();
                res.status(200).json(deletereviewData);
            }
            catch({message}){
                res.json({message});
            }
        };